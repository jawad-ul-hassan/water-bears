import { config } from '../config'
import { AccountWithTokens } from '../hooks/useAccounts'
import { NonFungibleResource } from '../transformers/addTokens'

export const hasMemberCard = (accounts: AccountWithTokens[]) =>
  accounts.some(
    (account) =>
      Object.values(
        account.nonFungibleTokens[
          config.addresses.waterBearResource
        ] || {}
      ).length > 0
  )

export type AccountWithMemberCard = {
  account: AccountWithTokens
  memberCard: NonFungibleResource
}

export const getMemberCard = (
  accounts: AccountWithTokens[]
): AccountWithMemberCard | undefined => {
  const account = accounts.find(
    (account) =>
      account.nonFungibleTokens[config.addresses.waterBearResource]
  )
  return account
    ? {
        account,
        memberCard:
          account?.nonFungibleTokens[
            config.addresses.waterBearResource
          ][0],
      }
    : undefined
}
