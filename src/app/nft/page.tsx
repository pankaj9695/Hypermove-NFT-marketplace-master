"use client";
import React, { useMemo } from "react";
import ConsumablesHead from "@/app/nft/Heading/page";
import { sampleMap } from "../../../public/Demo";
import Purchase from "@/app/nft/Purchase/page";
import SimilarPage from "@/app/nft/Similar NFT/page";
import router from "next/router";
import { useTokens } from "@/store/tokens/hook";
import { NFTTokenData } from "@/store/tokens";
import { useAppChainId } from "@/store/app/hook";
import { network } from "@/config/network";
import { tokenContracts } from "@/config/contract";
import { useSearchParams } from "next/navigation";

const Page = () => {
  const multiplier = sampleMap[3].multiplier;
  const searchParams = useSearchParams();

  // @ts-ignore
  const tokenId = searchParams.get("tokenId");

  const tokenData = useTokens();

  const selectedNFT = useMemo<NFTTokenData>(() => {
    return tokenData[Number(tokenId)];
  }, [tokenData, tokenId]);

  const appChainId = useAppChainId();

  return (
    <div>
      <ConsumablesHead multiplier={multiplier} />

      <Purchase
        image={selectedNFT?.metadata?.image}
        heading={selectedNFT?.metadata?.name}
        headingNumber={`#${selectedNFT?.tokenId}`}
        loveCount={0}
        polygon={network[appChainId]}
        gamingAsset="Gaming Asset"
        createdBy="Hypermove"
        contractAddress={tokenContracts[appChainId]}
        itemId={String(selectedNFT?.tokenId)}
        price={String(selectedNFT?.price)}
        collection="Hypermove Gaming"
        inGameAsset="In Game Asset Name"
        quantity={selectedNFT?.quantity}
        availbleToBuy={!selectedNFT?.active}
      />

      <SimilarPage />
    </div>
  );
};

export default Page;
