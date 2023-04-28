// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.

import {
  TypedMap,
  Entity,
  Value,
  ValueKind,
  store,
  Bytes,
  BigInt,
  BigDecimal
} from "@graphprotocol/graph-ts";

export class ResolutionVoter extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save ResolutionVoter entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        `Entities of type ResolutionVoter must have an ID of type String but the id '${id.displayData()}' is of type ${id.displayKind()}`
      );
      store.set("ResolutionVoter", id.toString(), this);
    }
  }

  static load(id: string): ResolutionVoter | null {
    return changetype<ResolutionVoter | null>(store.get("ResolutionVoter", id));
  }

  get id(): string {
    let value = this.get("id");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toString();
    }
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get votingPower(): BigInt {
    let value = this.get("votingPower");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toBigInt();
    }
  }

  set votingPower(value: BigInt) {
    this.set("votingPower", Value.fromBigInt(value));
  }

  get address(): Bytes {
    let value = this.get("address");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toBytes();
    }
  }

  set address(value: Bytes) {
    this.set("address", Value.fromBytes(value));
  }

  get hasVoted(): boolean {
    let value = this.get("hasVoted");
    if (!value || value.kind == ValueKind.NULL) {
      return false;
    } else {
      return value.toBoolean();
    }
  }

  set hasVoted(value: boolean) {
    this.set("hasVoted", Value.fromBoolean(value));
  }

  get hasVotedYes(): boolean {
    let value = this.get("hasVotedYes");
    if (!value || value.kind == ValueKind.NULL) {
      return false;
    } else {
      return value.toBoolean();
    }
  }

  set hasVotedYes(value: boolean) {
    this.set("hasVotedYes", Value.fromBoolean(value));
  }

  get delegated(): Bytes {
    let value = this.get("delegated");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toBytes();
    }
  }

  set delegated(value: Bytes) {
    this.set("delegated", Value.fromBytes(value));
  }
}

export class ResolutionType extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save ResolutionType entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        `Entities of type ResolutionType must have an ID of type String but the id '${id.displayData()}' is of type ${id.displayKind()}`
      );
      store.set("ResolutionType", id.toString(), this);
    }
  }

  static load(id: string): ResolutionType | null {
    return changetype<ResolutionType | null>(store.get("ResolutionType", id));
  }

  get id(): string {
    let value = this.get("id");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toString();
    }
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get name(): string {
    let value = this.get("name");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toString();
    }
  }

  set name(value: string) {
    this.set("name", Value.fromString(value));
  }

  get quorum(): BigInt {
    let value = this.get("quorum");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toBigInt();
    }
  }

  set quorum(value: BigInt) {
    this.set("quorum", Value.fromBigInt(value));
  }

  get noticePeriod(): BigInt {
    let value = this.get("noticePeriod");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toBigInt();
    }
  }

  set noticePeriod(value: BigInt) {
    this.set("noticePeriod", Value.fromBigInt(value));
  }

  get votingPeriod(): BigInt {
    let value = this.get("votingPeriod");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toBigInt();
    }
  }

  set votingPeriod(value: BigInt) {
    this.set("votingPeriod", Value.fromBigInt(value));
  }

  get canBeNegative(): boolean {
    let value = this.get("canBeNegative");
    if (!value || value.kind == ValueKind.NULL) {
      return false;
    } else {
      return value.toBoolean();
    }
  }

  set canBeNegative(value: boolean) {
    this.set("canBeNegative", Value.fromBoolean(value));
  }
}

export class Resolution extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save Resolution entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        `Entities of type Resolution must have an ID of type String but the id '${id.displayData()}' is of type ${id.displayKind()}`
      );
      store.set("Resolution", id.toString(), this);
    }
  }

  static load(id: string): Resolution | null {
    return changetype<Resolution | null>(store.get("Resolution", id));
  }

  get id(): string {
    let value = this.get("id");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toString();
    }
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get snapshotId(): BigInt {
    let value = this.get("snapshotId");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toBigInt();
    }
  }

  set snapshotId(value: BigInt) {
    this.set("snapshotId", Value.fromBigInt(value));
  }

  get ipfsDataURI(): string {
    let value = this.get("ipfsDataURI");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toString();
    }
  }

  set ipfsDataURI(value: string) {
    this.set("ipfsDataURI", Value.fromString(value));
  }

  get title(): string | null {
    let value = this.get("title");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toString();
    }
  }

  set title(value: string | null) {
    if (!value) {
      this.unset("title");
    } else {
      this.set("title", Value.fromString(<string>value));
    }
  }

  get content(): string | null {
    let value = this.get("content");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toString();
    }
  }

  set content(value: string | null) {
    if (!value) {
      this.unset("content");
    } else {
      this.set("content", Value.fromString(<string>value));
    }
  }

  get isNegative(): boolean {
    let value = this.get("isNegative");
    if (!value || value.kind == ValueKind.NULL) {
      return false;
    } else {
      return value.toBoolean();
    }
  }

  set isNegative(value: boolean) {
    this.set("isNegative", Value.fromBoolean(value));
  }

  get yesVotesTotal(): BigInt {
    let value = this.get("yesVotesTotal");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toBigInt();
    }
  }

  set yesVotesTotal(value: BigInt) {
    this.set("yesVotesTotal", Value.fromBigInt(value));
  }

  get resolutionType(): string {
    let value = this.get("resolutionType");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toString();
    }
  }

  set resolutionType(value: string) {
    this.set("resolutionType", Value.fromString(value));
  }

  get createTimestamp(): BigInt {
    let value = this.get("createTimestamp");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toBigInt();
    }
  }

  set createTimestamp(value: BigInt) {
    this.set("createTimestamp", Value.fromBigInt(value));
  }

  get updateTimestamp(): BigInt {
    let value = this.get("updateTimestamp");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toBigInt();
    }
  }

  set updateTimestamp(value: BigInt) {
    this.set("updateTimestamp", Value.fromBigInt(value));
  }

  get approveTimestamp(): BigInt {
    let value = this.get("approveTimestamp");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toBigInt();
    }
  }

  set approveTimestamp(value: BigInt) {
    this.set("approveTimestamp", Value.fromBigInt(value));
  }

  get rejectTimestamp(): BigInt {
    let value = this.get("rejectTimestamp");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toBigInt();
    }
  }

  set rejectTimestamp(value: BigInt) {
    this.set("rejectTimestamp", Value.fromBigInt(value));
  }

  get createBy(): Bytes {
    let value = this.get("createBy");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toBytes();
    }
  }

  set createBy(value: Bytes) {
    this.set("createBy", Value.fromBytes(value));
  }

  get updateBy(): Bytes | null {
    let value = this.get("updateBy");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toBytes();
    }
  }

  set updateBy(value: Bytes | null) {
    if (!value) {
      this.unset("updateBy");
    } else {
      this.set("updateBy", Value.fromBytes(<Bytes>value));
    }
  }

  get approveBy(): Bytes | null {
    let value = this.get("approveBy");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toBytes();
    }
  }

  set approveBy(value: Bytes | null) {
    if (!value) {
      this.unset("approveBy");
    } else {
      this.set("approveBy", Value.fromBytes(<Bytes>value));
    }
  }

  get rejectBy(): Bytes | null {
    let value = this.get("rejectBy");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toBytes();
    }
  }

  set rejectBy(value: Bytes | null) {
    if (!value) {
      this.unset("rejectBy");
    } else {
      this.set("rejectBy", Value.fromBytes(<Bytes>value));
    }
  }

  get voters(): Array<string> {
    let value = this.get("voters");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toStringArray();
    }
  }

  set voters(value: Array<string>) {
    this.set("voters", Value.fromStringArray(value));
  }

  get hasQuorum(): boolean {
    let value = this.get("hasQuorum");
    if (!value || value.kind == ValueKind.NULL) {
      return false;
    } else {
      return value.toBoolean();
    }
  }

  set hasQuorum(value: boolean) {
    this.set("hasQuorum", Value.fromBoolean(value));
  }

  get executionTo(): Array<Bytes> {
    let value = this.get("executionTo");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toBytesArray();
    }
  }

  set executionTo(value: Array<Bytes>) {
    this.set("executionTo", Value.fromBytesArray(value));
  }

  get executionData(): Array<Bytes> {
    let value = this.get("executionData");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toBytesArray();
    }
  }

  set executionData(value: Array<Bytes>) {
    this.set("executionData", Value.fromBytesArray(value));
  }

  get executionTimestamp(): BigInt | null {
    let value = this.get("executionTimestamp");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toBigInt();
    }
  }

  set executionTimestamp(value: BigInt | null) {
    if (!value) {
      this.unset("executionTimestamp");
    } else {
      this.set("executionTimestamp", Value.fromBigInt(<BigInt>value));
    }
  }

  get addressedContributor(): Bytes {
    let value = this.get("addressedContributor");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toBytes();
    }
  }

  set addressedContributor(value: Bytes) {
    this.set("addressedContributor", Value.fromBytes(value));
  }

  get totalVotingPower(): BigInt {
    let value = this.get("totalVotingPower");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toBigInt();
    }
  }

  set totalVotingPower(value: BigInt) {
    this.set("totalVotingPower", Value.fromBigInt(value));
  }
}

export class DelegationUser extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save DelegationUser entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        `Entities of type DelegationUser must have an ID of type String but the id '${id.displayData()}' is of type ${id.displayKind()}`
      );
      store.set("DelegationUser", id.toString(), this);
    }
  }

  static load(id: string): DelegationUser | null {
    return changetype<DelegationUser | null>(store.get("DelegationUser", id));
  }

  get id(): string {
    let value = this.get("id");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toString();
    }
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get address(): Bytes {
    let value = this.get("address");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toBytes();
    }
  }

  set address(value: Bytes) {
    this.set("address", Value.fromBytes(value));
  }

  get delegated(): Bytes {
    let value = this.get("delegated");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toBytes();
    }
  }

  set delegated(value: Bytes) {
    this.set("delegated", Value.fromBytes(value));
  }
}

export class Offer extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save Offer entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        `Entities of type Offer must have an ID of type String but the id '${id.displayData()}' is of type ${id.displayKind()}`
      );
      store.set("Offer", id.toString(), this);
    }
  }

  static load(id: string): Offer | null {
    return changetype<Offer | null>(store.get("Offer", id));
  }

  get id(): string {
    let value = this.get("id");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toString();
    }
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get from(): Bytes {
    let value = this.get("from");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toBytes();
    }
  }

  set from(value: Bytes) {
    this.set("from", Value.fromBytes(value));
  }

  get amount(): BigInt {
    let value = this.get("amount");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toBigInt();
    }
  }

  set amount(value: BigInt) {
    this.set("amount", Value.fromBigInt(value));
  }

  get expirationTimestamp(): BigInt {
    let value = this.get("expirationTimestamp");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toBigInt();
    }
  }

  set expirationTimestamp(value: BigInt) {
    this.set("expirationTimestamp", Value.fromBigInt(value));
  }

  get createTimestamp(): BigInt {
    let value = this.get("createTimestamp");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toBigInt();
    }
  }

  set createTimestamp(value: BigInt) {
    this.set("createTimestamp", Value.fromBigInt(value));
  }

  get expiredOnTransfer(): boolean {
    let value = this.get("expiredOnTransfer");
    if (!value || value.kind == ValueKind.NULL) {
      return false;
    } else {
      return value.toBoolean();
    }
  }

  set expiredOnTransfer(value: boolean) {
    this.set("expiredOnTransfer", Value.fromBoolean(value));
  }
}

export class DaoUser extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save DaoUser entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        `Entities of type DaoUser must have an ID of type String but the id '${id.displayData()}' is of type ${id.displayKind()}`
      );
      store.set("DaoUser", id.toString(), this);
    }
  }

  static load(id: string): DaoUser | null {
    return changetype<DaoUser | null>(store.get("DaoUser", id));
  }

  get id(): string {
    let value = this.get("id");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toString();
    }
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get address(): Bytes {
    let value = this.get("address");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toBytes();
    }
  }

  set address(value: Bytes) {
    this.set("address", Value.fromBytes(value));
  }

  get governanceBalance(): BigInt {
    let value = this.get("governanceBalance");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toBigInt();
    }
  }

  set governanceBalance(value: BigInt) {
    this.set("governanceBalance", Value.fromBigInt(value));
  }

  get governanceOfferedTempBalance(): BigInt {
    let value = this.get("governanceOfferedTempBalance");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toBigInt();
    }
  }

  set governanceOfferedTempBalance(value: BigInt) {
    this.set("governanceOfferedTempBalance", Value.fromBigInt(value));
  }

  get governanceVestingBalance(): BigInt {
    let value = this.get("governanceVestingBalance");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toBigInt();
    }
  }

  set governanceVestingBalance(value: BigInt) {
    this.set("governanceVestingBalance", Value.fromBigInt(value));
  }

  get governanceVaultedBalance(): BigInt {
    let value = this.get("governanceVaultedBalance");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toBigInt();
    }
  }

  set governanceVaultedBalance(value: BigInt) {
    this.set("governanceVaultedBalance", Value.fromBigInt(value));
  }

  get governanceWithdrawableTempBalance(): BigInt {
    let value = this.get("governanceWithdrawableTempBalance");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toBigInt();
    }
  }

  set governanceWithdrawableTempBalance(value: BigInt) {
    this.set("governanceWithdrawableTempBalance", Value.fromBigInt(value));
  }

  get votingPower(): BigInt {
    let value = this.get("votingPower");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toBigInt();
    }
  }

  set votingPower(value: BigInt) {
    this.set("votingPower", Value.fromBigInt(value));
  }

  get shareholderRegistryBalance(): BigInt {
    let value = this.get("shareholderRegistryBalance");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toBigInt();
    }
  }

  set shareholderRegistryBalance(value: BigInt) {
    this.set("shareholderRegistryBalance", Value.fromBigInt(value));
  }

  get neokigdomTokenBalance(): BigInt {
    let value = this.get("neokigdomTokenBalance");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toBigInt();
    }
  }

  set neokigdomTokenBalance(value: BigInt) {
    this.set("neokigdomTokenBalance", Value.fromBigInt(value));
  }

  get lastGovernanceTokenTransferTimestamp(): BigInt {
    let value = this.get("lastGovernanceTokenTransferTimestamp");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toBigInt();
    }
  }

  set lastGovernanceTokenTransferTimestamp(value: BigInt) {
    this.set("lastGovernanceTokenTransferTimestamp", Value.fromBigInt(value));
  }

  get activeOffers(): Array<string> {
    let value = this.get("activeOffers");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toStringArray();
    }
  }

  set activeOffers(value: Array<string>) {
    this.set("activeOffers", Value.fromStringArray(value));
  }
}

export class DaoManager extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save DaoManager entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        `Entities of type DaoManager must have an ID of type String but the id '${id.displayData()}' is of type ${id.displayKind()}`
      );
      store.set("DaoManager", id.toString(), this);
    }
  }

  static load(id: string): DaoManager | null {
    return changetype<DaoManager | null>(store.get("DaoManager", id));
  }

  get id(): string {
    let value = this.get("id");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toString();
    }
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get contributorsAddresses(): Array<Bytes> {
    let value = this.get("contributorsAddresses");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toBytesArray();
    }
  }

  set contributorsAddresses(value: Array<Bytes>) {
    this.set("contributorsAddresses", Value.fromBytesArray(value));
  }

  get managingBoardAddresses(): Array<Bytes> {
    let value = this.get("managingBoardAddresses");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toBytesArray();
    }
  }

  set managingBoardAddresses(value: Array<Bytes>) {
    this.set("managingBoardAddresses", Value.fromBytesArray(value));
  }

  get shareholdersAddresses(): Array<Bytes> {
    let value = this.get("shareholdersAddresses");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toBytesArray();
    }
  }

  set shareholdersAddresses(value: Array<Bytes>) {
    this.set("shareholdersAddresses", Value.fromBytesArray(value));
  }

  get investorsAddresses(): Array<Bytes> {
    let value = this.get("investorsAddresses");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toBytesArray();
    }
  }

  set investorsAddresses(value: Array<Bytes>) {
    this.set("investorsAddresses", Value.fromBytesArray(value));
  }

  get resolutionTypes(): Array<string> {
    let value = this.get("resolutionTypes");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toStringArray();
    }
  }

  set resolutionTypes(value: Array<string>) {
    this.set("resolutionTypes", Value.fromStringArray(value));
  }

  get totalVotingPower(): BigInt {
    let value = this.get("totalVotingPower");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toBigInt();
    }
  }

  set totalVotingPower(value: BigInt) {
    this.set("totalVotingPower", Value.fromBigInt(value));
  }
}
