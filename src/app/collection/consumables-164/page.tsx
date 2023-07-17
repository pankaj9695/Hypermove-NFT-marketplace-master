"use client"
import React from 'react';
import BannerCard from "@/app/components/BannerCard";
import Onsale from "@/app/collection/consumables-164/OnSale/Onsale";
import ConsumablesHead from "@/app/collection/consumables-164/Heading/page";
import OnAuction from "@/app/collection/consumables-164/OnAuction/page";

const Page = () => {
    return (
        <div >
            <ConsumablesHead/>
           <div className="mt-10">
            <BannerCard
                img="https://fabweltmarketplace.s3.us-east-2.amazonaws.com/2022/8/22/collectionBanner/banner-collection.png"
                href="https://market.fabwelt.com/collection/consumables-164"
                TabText={['On Sale', 'On Auction']}
                Child={[<Onsale key={0}/> ,<OnAuction key={1}/>]}
            />
           </div>
            <div className="mb-16"></div>
        </div>
    );
};

export default Page;