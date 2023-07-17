"use client"
import React from 'react';
import BannerCard from "@/app/components/BannerCard";
import Onsale from "@/app/collection/collectables-977/OnSale/Onsale";
import ConsumablesHead from "@/app/collection/collectables-977/Heading/page";
import OnAuction from "@/app/collection/collectables-977/OnAuction/page";

const Page = () => {
    return (
        <div >
            <ConsumablesHead/>
            <div className="mt-10">
                <BannerCard
                    img="https://fabweltmarketplace.s3.us-east-2.amazonaws.com/2023/0/27/collectionBanner/85e40484-a3fa-4f02-a655-5c9c156160e3"
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