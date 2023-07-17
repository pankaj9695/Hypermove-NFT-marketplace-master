"use client";
import React from "react";
import Card from "@/app/components/Card";
import Link from "next/link";
import { useTokens } from "@/store/tokens/hook";

const Onsale: React.FC = () => {
  const nftData = useTokens();

  return (
    <section className="px-4 md:px-16 p-8 w-full gap-2 justify-center items-center min-h-[550px] h-auto">

        <p className="text-center text-white text-2xl md:text-4xl mt-60">No NFTs on sale yet</p>

        {/*<div className=" grid grid-cols-1 md:grid-cols-5 gap-4 items-center justify-center">*/}
        {/*    {sampleMap.map((item, i) => (*/}
        {/*        <Card*/}
        {/*            key={i}*/}
        {/*            image={item.image}*/}
        {/*            imageText={item.imageText}*/}
        {/*            price={item.price}*/}
        {/*            loveCount={item.loveCount}*/}
        {/*            label={item.label}*/}
        {/*            link={item.link}*/}
        {/*            isHoverable={false}*/}
        {/*            multiplier={item.multiplier} // Make `multiplier` optional in CardProps*/}
        {/*        />*/}
        {/*    ))}*/}
        {/*</div>*/}

    </section>
  );
};

export default Onsale;
