import { useCallback, useMemo, useState } from "react";
import { useWeb3React } from "@web3-react/core";
import {
  getMarketplaceCallData,
  getMarketplaceInterface,
} from "../utils/contractUtils";
import { BigNumber } from "ethers";
import { marketplaceContracts } from "../config/contract";
import { Web3Provider } from "@ethersproject/providers";
import { gasPrice, unitParser } from "../utils";

export enum BUY_TRANSACTION_STATUS {
  BUY_LOADING,
  BUY_COMPLETED,
  BUY_ERROR,
}

export interface BuyTransactionResponse {
  buyTransactionStatus: BUY_TRANSACTION_STATUS;
  transactionHash: string;
  buyCallback: (tokenId: number, quantity: number, price: number) => void;
  buyErrorMessage?: string;
}

let log = console.log;

export const useBuy = (): BuyTransactionResponse => {
  let [buyTransactionStatus, setBurnTransactionStatus] =
    useState<BUY_TRANSACTION_STATUS>();
  let [transactionHash, setTransactionHash] = useState<string>();
  const [buyErrorMessage, setBuyErrorMessage] = useState<string>();

  let { account, chainId, library } = useWeb3React() as {
    account: string;
    chainId: number;
    library: Web3Provider;
  };

  let marketplace = marketplaceContracts[chainId];

  const buyCallback = useCallback(
    async (tokenId: number, quantity: number, price: number) => {
      try {
        if (marketplace && account && tokenId && chainId) {
          const fees = price * quantity;
          setBurnTransactionStatus(BUY_TRANSACTION_STATUS.BUY_LOADING);

          let iface = getMarketplaceInterface();
          let callData = getMarketplaceCallData(iface, "buy", [
            tokenId,
            quantity,
          ]);

          let gasLimit = await library.getSigner().estimateGas({
            from: account,
            to: marketplace,
            data: callData,
            value: unitParser(fees),
          });

          let gas_price = await gasPrice(library);

          const buy = await library.getSigner().sendTransaction({
            from: account,
            to: marketplace,
            data: callData,
            gasLimit,
            gasPrice: gas_price,
            value: unitParser(fees),
          });

          await buy.wait(2);
          setBurnTransactionStatus(BUY_TRANSACTION_STATUS.BUY_COMPLETED);
          setTransactionHash(buy?.hash);
        }
      } catch (err) {
        if (err instanceof Error) {
          log(err.message);
          setBuyErrorMessage(err?.message);
          setBurnTransactionStatus(BUY_TRANSACTION_STATUS.BUY_ERROR);
        }
      }
    },
    [account, marketplace, library, chainId]
  );

  return {
    // @ts-ignore
    buyTransactionStatus,
    buyCallback,
    //@ts-ignore
    transactionHash,
    buyErrorMessage,
  };
};
