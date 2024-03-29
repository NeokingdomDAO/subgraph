import { Address, log } from "@graphprotocol/graph-ts";
import { Offer, OfferMatch } from "../generated/schema";
import {
  OfferCreated,
  OfferMatched,
  Withdrawn,
} from "../generated/InternalMarket/InternalMarket";
import { getDaoUser } from "./dao-user";
import saveDaoUserData from "./save-dao-user-data";

export function handleOfferCreated(event: OfferCreated): void {
  const fromHexString = event.params.from.toHexString();
  const id = event.params.id.toHexString();
  const offerId = id + "-" + fromHexString;

  const offerEntity = new Offer(offerId);

  offerEntity.from = event.params.from;
  offerEntity.amount = event.params.amount;
  offerEntity.expirationTimestamp = event.params.expiredAt;
  offerEntity.createTimestamp = event.block.timestamp;
  offerEntity.expiredOnTransfer = false;
  offerEntity.matches = [];

  offerEntity.save();

  const daoUser = getDaoUser(fromHexString);
  daoUser.activeOffers = daoUser.activeOffers.concat([offerEntity.id]);
  daoUser.save();
}

export function handleOfferMatched(event: OfferMatched): void {
  const fromHexString = event.params.from.toHexString();
  const id = event.params.id.toHexString();
  const offerId = id + "-" + fromHexString;

  const offerEntity = Offer.load(offerId);

  if (!offerEntity) {
    log.error("Offer {} not found", [offerId]);
    return;
  }

  const matchesLength = offerEntity.matches.length + 1;

  const offerMatchEntity = new OfferMatch(offerId + "-" + matchesLength.toString());
  offerMatchEntity.amount = event.params.amount;
  offerMatchEntity.matchedFrom = event.params.to;
  offerMatchEntity.createTimestamp = event.block.timestamp;
  offerMatchEntity.save();
  
  offerEntity.amount = offerEntity.amount.minus(event.params.amount);
  offerEntity.matches = offerEntity.matches.concat([offerMatchEntity.id]);
  offerEntity.save();
  
  // save dao user to refresh all the balances
  saveDaoUserData(Address.fromBytes(offerEntity.from), event.block);
}

export function handleWithdrawn(event: Withdrawn): void {
  // save dao user to refresh all the balances
  saveDaoUserData(Address.fromBytes(event.params.from), event.block);
}
