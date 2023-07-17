"use client";
import React from "react";
import Card from "@/app/components/Card";
import { useTokens } from "@/store/tokens/hook";
import { NFTTokenData } from "@/store/tokens";

const Onsale: React.FC = () => {
  const nftData = useTokens();

  return (
    <section className="px-4 md:px-16 p-8 w-full gap-2 justify-center items-center min-h-screen h-auto">
      <div className="flex justify-between px-7 md:px-16 items-center w-full">
        <div className=" grid grid-cols-1 md:grid-cols-5 gap-4 items-center justify-center">
          {Object.values(nftData).map((item: NFTTokenData, i) => (
            <Card
              key={i}
              tokenId={String(item?.tokenId)}
              image={item.metadata?.image}
              imageText={item?.metadata?.name}
              price={String(item?.price)}
              loveCount={0}
              label={item?.metadata?.description}
              isHoverable={item?.active}
              multiplier={"1x"} // Make `multiplier` optional in CardProps
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Onsale;
