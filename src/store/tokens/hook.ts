import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { AppDispatch, AppState } from "..";
import { useAppChainId } from "../app/hook";
import { getMulticallSale } from "@/utils/multicall/multicall";
import { marketplaceContracts } from "@/config/contract";
import axios from "axios";
import tokens, { Token, setTokens } from ".";
import { getAllMetaData } from "@/utils/fetchMetadata";
import { NftMatadata } from "@/types/nft";
import { useSelector } from "react-redux";
import { unitFormatter } from "@/utils";
import { BigNumber } from "ethers";

interface TokenResponse {
  message: string;
  data: {
    Assets: {
      [key: string]: { uri: string; marketPlace: string; quantity: number };
    };
  };
}

export const useSetToken = () => {
  const dispatch = useDispatch<AppDispatch>();
  const appChainId = useAppChainId();

  useEffect(() => {
    if (!appChainId) return;

    const fetchMulticall = async () => {
      try {
        const tokenResponse = (await axios
          .get(`https://apinft.hypermove.io/all-gaming-nfts/${appChainId}`)
          .then((data) => data.data)) as TokenResponse;

        let token: number[] = [];
        if (tokenResponse?.data) {
          token = Object.keys(tokenResponse?.data?.Assets).map((e) =>
            Number(e)
          );
        }

        if (token.length === 0) return;

        const urls = Object.values(tokenResponse?.data?.Assets).map(
          (el) => el?.uri
        );

        let metaData = await getAllMetaData(urls);

        let data: {
          [tokenId: number]: {
            seller: string;
            tokenId: number;
            price: number;
            quantity: number;
            uri: string;
            active: boolean;
            metadata: NftMatadata;
          };
        } = {};

        let multicallData = await getMulticallSale(
          appChainId,
          marketplaceContracts[appChainId],
          token
        );

        if (multicallData) {
          for (let i = 1; i <= token.length; i++) {
            data[i] = {
              seller: multicallData?.[i]?.seller,
              tokenId: multicallData?.[i]?.tokenId,
              price: unitFormatter(multicallData?.[i]?.price?.toString()),
              quantity: multicallData?.[i]?.quantity,
              uri: tokenResponse?.data?.Assets[i]?.uri,
              active: multicallData?.[i]?.active,
              metadata: metaData[i - 1],
            };
          }
        }
        dispatch(setTokens({ tokens: data }));
      } catch (err) {
        if (err instanceof Error) {
          console.log("useSetToken Failed", err?.message);
        }
      }
    };
    fetchMulticall();
  });
};

export const useTokens = (): Token => {
  return useSelector((state: AppState) => state.tokens.tokens);
};
