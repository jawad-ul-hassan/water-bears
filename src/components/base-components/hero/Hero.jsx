import "@radixdlt/dapps-dropdown";
import {
  ThirdwebNftMedia,
  Web3Button,
  useAddress,
  useContract,
  useContractRead,
  useOwnedNFTs,
  useTokenBalance,
} from "@thirdweb-dev/react";
import BigNumber from "bignumber.js";
import { useEffect, useState } from "react";
import {
  nftDropContractAddress,
  stakingContractAddress,
  tokenContractAddress,
} from "../../../consts/contractAddresses";
import NFTCard from "../../NFTCard";
import { Text } from "../text";
import styles from "./Hero.module.css";
import { AccountPicker } from "../account-picker/AccountPicker";
import { useAccounts } from "../../../hooks/useAccounts";
import { useSendTransactionManifest } from "../../../hooks/useSendTransactionManifest";
import { Button } from "../button";
import { useDappToolkit } from "../../../hooks/useDappToolkit";
import { config } from "../../../config";

export const Hero = ({ personaDataName, persona }) => {
  const address = useAddress();
  const { contract: nftDropContract } = useContract(
    nftDropContractAddress,
    "nft-drop"
  );
  const { contract: tokenContract } = useContract(
    tokenContractAddress,
    "token"
  );
  const { contract } = useContract(stakingContractAddress);
  const { stakeWaterBear, claimRewards } = useSendTransactionManifest()();

  const { data: ownedNfts } = useOwnedNFTs(nftDropContract, address);
  const { data: tokenBalance } = useTokenBalance(tokenContract, address);
  const [claimableRewards, setClaimableRewards] =
    useState < BigNumber > new BigNumber(0);
  const { data: stakedTokens } = useContractRead(contract, "getStakeInfo", [
    address,
  ]);
  const { nickname, givenNames, familyName } = personaDataName || {};
  const dAppToolkit = useDappToolkit();

  useEffect(() => {
    (async () => {
      console.log(
        await dAppToolkit.gatewayApi.state.getEntityDetailsVaultAggregated(
          config.addresses.stakePoolComponent
        ),
        "getEntityDetailsVaultAggregated"
      );
    })();
  }, [dAppToolkit]);

  const alias = nickname || givenNames || familyName || persona?.label;
  useEffect(() => {
    if (!contract || !address) return;

    async function loadClaimableRewards() {
      const stakeInfo = await contract?.call("getStakeInfo", [address]);
      setClaimableRewards(stakeInfo[1]);
    }

    loadClaimableRewards();
  }, [address, contract, setClaimableRewards]);
  const [state, setState] =
    useState <
    {
      selectedAccountAddress,
    } >
    {};
  const { selectedAccountAddress } = state;
  const {
    state: { accounts },
  } = useAccounts();

  const stakeNft = (id) => {
    if (!selectedAccountAddress) return;
    stakeWaterBear({ accountAddress: selectedAccountAddress, id });
  };

  const claimRewardsAction = () => {
    if (!selectedAccountAddress) return;
    claimRewards({ accountAddress: selectedAccountAddress });
  };

  return (
    <div className={styles.hero}>
      <Text variant="title">
        {alias ? `Welcome, ${alias}!` : "Welcome to the WaterBear NFT Mint"}
      </Text>
      <Text variant="subtitle">
        {alias
          ? "A toy Web3 dApp on the Radix Network where the transactions with the Radix Wallet are real, but the tokens have no value"
          : "A playground to experience Web3 using the Radix Wallet"}
      </Text>
      <div
        style={{ display: "flex", justifyContent: "center", marginTop: "2rem" }}
      >
        <AccountPicker
          accounts={accounts}
          selected={selectedAccountAddress}
          onSelect={(selectedAccountAddress) =>
            setState((prev) => ({
              ...prev,
              selectedAccountAddress,
            }))
          }
        />
      </div>
      <h2>Your Tokens</h2>
      <div className={styles.tokenGrid}>
        <div className={styles.tokenItem}>
          <h3 className={styles.tokenLabel}>Claimable Rewards</h3>
          <p className={styles.tokenValue}>
            <b>
              {!claimableRewards ? "Loading..." : claimableRewards.toString()}
            </b>{" "}
            {tokenBalance?.symbol}
          </p>
        </div>
        <div className={styles.tokenItem}>
          <h3 className={styles.tokenLabel}>Current Balance</h3>
          <p className={styles.tokenValue}>
            <b>{tokenBalance?.displayValue}</b> {tokenBalance?.symbol}
          </p>
        </div>
      </div>

      <Button onClick={() => claimRewardsAction()}>Claim Rewards</Button>

      <hr className={`${styles.divider} ${styles.spacerTop}`} />
      <h2>Your Staked NFTs</h2>
      <div className={styles.nftBoxGrid}>
        {stakedTokens &&
          stakedTokens[0]?.map((stakedToken) => (
            <NFTCard
              tokenId={stakedToken.toNumber()}
              key={stakedToken.toString()}
            />
          ))}
      </div>

      <hr className={`${styles.divider} ${styles.spacerTop}`} />
      <h2>Your Unstaked NFTs</h2>
      <div className={styles.nftBoxGrid}>
        {ownedNfts?.map((nft) => (
          <div className={styles.nftBox} key={nft.metadata.id.toString()}>
            <ThirdwebNftMedia
              metadata={nft.metadata}
              className={styles.nftMedia}
            />
            <h3>{nft.metadata.name}</h3>
            <Web3Button
              contractAddress={stakingContractAddress}
              action={() => stakeNft(nft.metadata.id)}
            >
              Stake
            </Web3Button>
          </div>
        ))}
      </div>
    </div>
  );
};
