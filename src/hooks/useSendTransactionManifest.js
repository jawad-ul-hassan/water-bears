import { useCallback } from "react"
import { config } from "../config"
import { TransactionManifests } from "../radix/transaction-manifests"
import { useSendTransaction } from "./useSendTransaction"
import { useWellKnownAddresses } from "./useWellKnownAddresses"

export const useSendTransactionManifest = () => {
  const transactionManifests = TransactionManifests(config.addresses)
  const sendTransaction = useSendTransaction()
  const wellKnownAddresses = useWellKnownAddresses()
  const xrdAddress = wellKnownAddresses?.xrd || ""

  return useCallback(
    () => ({
      buyWaterBear: input =>
        sendTransaction(
          transactionManifests.buyWaterBear({ ...input, xrdAddress }),
          "Welcome to WaterBears! Thank you for purchasing the NFT!"
        ),
      stakeWaterBear: input =>
        sendTransaction(
          transactionManifests.stakeWaterBear(input),
          "Your NFT has been successfully staked. Thank you!"
        ),
      claimRewards: input =>
        sendTransaction(
          transactionManifests.claimRewards(input),
          "Your rewards have been successfully claimed. Thank you!"
        )
    }),
    [sendTransaction, transactionManifests, xrdAddress]
  )
}
