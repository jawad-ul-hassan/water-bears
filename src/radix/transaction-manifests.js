export const TransactionManifests = ({
  waterBearComponent,
  stakePoolComponent,
  waterBearResource
}) => {
  const buyWaterBear = ({ accountAddress, xrdAddress }) => {
    const transactionManifest = `
    CALL_METHOD
        Address("${accountAddress}")
        "withdraw"
        Address("${xrdAddress}")
        Decimal("250")
    ;
    TAKE_ALL_FROM_WORKTOP
        Address("${xrdAddress}")
        Bucket("nft_bucket")
    ;
    CALL_METHOD
        Address("${waterBearComponent}")
        "buy_nft"
        Bucket("nft_bucket")
    ;
    CALL_METHOD
        Address("${accountAddress}")
        "deposit_batch"
        Expression("ENTIRE_WORKTOP")
    ;
    `
    console.log(transactionManifest)
    return transactionManifest
  }

  const stakeWaterBear = ({ accountAddress, id }) => {
    const transactionManifest = `
    CALL_METHOD
        Address("${accountAddress}")
        "withdraw_non_fungibles"
        Address("${waterBearResource}")
        Array<NonFungibleLocalId>(
            NonFungibleLocalId("<${id}>")
        )
    ;
    TAKE_ALL_FROM_WORKTOP
        Address("${waterBearResource}")
        Bucket("nft_bucket")
    ;
    CALL_METHOD
        Address("${stakePoolComponent}")
        "stake"
        Bucket("nft_bucket")
    ;
    `
    console.log(transactionManifest)
    return transactionManifest
  }

  const claimRewards = ({ accountAddress }) => {
    const transactionManifest = `
    CALL_METHOD
        Address("${stakePoolComponent}")
        "claim_rewards"
    ;
    CALL_METHOD
        Address("${accountAddress}")
        "deposit_batch"
        Expression("ENTIRE_WORKTOP")
    ;
    `
    console.log(transactionManifest)
    return transactionManifest
  }

  return { buyWaterBear, stakeWaterBear, claimRewards }
}
