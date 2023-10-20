#!/bin/bash

# Check for the required argument
if [ "$#" -ne 1 ]; then
    echo "Usage: $0 <mainnet|testnet>"
    exit 1
fi

NETWORK=$1

# Determine the appropriate endpoint based on the network
case $NETWORK in
mainnet)
    ENDPOINT="https://tendermint.bd.evmos.org:26657/status"
    ;;
testnet)
    ENDPOINT="https://tendermint.bd.evmos.dev:26657/status"
    ;;
*)
    echo "Invalid argument. Please use either 'mainnet' or 'testnet'."
    exit 1
    ;;
esac

# Fetch the sync_info.earliest_block_height from the endpoint
curl -L -s $ENDPOINT | jq -r .result.sync_info.earliest_block_height
