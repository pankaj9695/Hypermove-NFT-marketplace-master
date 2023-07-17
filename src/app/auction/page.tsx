"use client"
import React from 'react';
import BannerCard from "@/app/components/BannerCard";
import ConsumablesHead from "@/app/auction/Heading/page";



const Page = () => {
    return (
        <div >

            <ConsumablesHead/>
           {/*<div className="mt-10">*/}
           {/* <BannerCard*/}
           {/*     img="https://fabweltmarketplace.s3.us-east-2.amazonaws.com/2023/0/27/collectionBanner/IngameassetsBanner.png"*/}
           {/*     href="https://market.fabwelt.com/collection/consumables-164"*/}
           {/*     TabText={['On Sale', 'On Auction']}*/}
           {/*     Child={[<Onsale key={0}/>]}*/}
           {/* />*/}
           {/*</div>*/}
            <div className="w-full h-full text-6xl text-center text-white mt-10 mb-16">No NFT</div>
            <div className="w-full h-full text-6xl text-center text-white mt-10 mb-16">.</div>
            <div className="w-full h-full text-6xl text-center text-white mt-10 mb-16">.</div>
        </div>
    );
};

export default Page;