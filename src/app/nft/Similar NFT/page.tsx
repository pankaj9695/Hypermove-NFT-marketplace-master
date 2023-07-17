"use client";
import React from "react";
import Card from "@/app/components/Card";
import { useTokens } from "@/store/tokens/hook";
import { NFTTokenData } from "@/store/tokens";

const SimilarPage: React.FC = () => {
  const nftData = useTokens();

  return (
    <section className=" bg-[#14141f] px-4 md:px-16 p-8 w-full gap-2 justify-center items-center min-h-screen h-auto">
      <p className="text-[#41f0d0] text-center text-4xl font-bold mb-8">
        Similar NFTs
      </p>
      <div className=" items-center w-full">
        <div className=" grid grid-cols-1 md:grid-cols-4 gap-4 items-center justify-center">
          {Object.values(nftData).map((item: NFTTokenData, i) => (
            <Card
              key={i}
              tokenId={String(item?.tokenId)}
              image={item?.metadata?.image}
              imageText={item?.metadata?.name}
              price={String(item?.price)}
              loveCount={10}
              label={item?.metadata?.description}
              isHoverable={false}
              multiplier={"5x"} // Make `multiplier` optional in CardProps
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default SimilarPage;
