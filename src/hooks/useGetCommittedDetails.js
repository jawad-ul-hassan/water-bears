import { useCallback } from "react"
import { useDappToolkit } from "./useDappToolkit"
import { ResultAsync } from "neverthrow"

export const useGetCommittedDetails = () => {
  const dAppToolkit = useDappToolkit()

  const getCommittedDetails = txId =>
    ResultAsync.fromPromise(
      dAppToolkit.gatewayApi.transaction
        .getCommittedDetails(txId)
        .then(res => ({
          epoch: res.transaction.epoch,
          round: res.transaction.round,
          status: res.transaction.transaction_status,
          date: res.transaction.confirmed_at,
          fee: res.transaction.fee_paid,
          message: res.transaction.message?.content?.value,
          encodedManifest: res.transaction.raw_hex,
          receipt: res.transaction.receipt,
          events: res.transaction.receipt?.events,
          affectedEntities: res.transaction.affected_global_entities || [],
          createdEntities:
            res.transaction.receipt?.state_updates?.new_global_entities || [],
          stateVersion: res.transaction.state_version
        })),
      error => error
    )

  return useCallback(getCommittedDetails, [dAppToolkit])
}
