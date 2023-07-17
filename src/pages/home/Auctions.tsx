import React from 'react';
import Link from "next/link";


const Auctions = () => {
    return (

        <div className="text-white w-full  h-35 bg-[#1D1D24] py-8 md:py-16">
            <div className="flex justify-between px-4 md:px-16">
                <div className="text-4xl text-amber-50 font-bold">Recent Auctions</div>
                <Link href="/">
                    <div className="text-xl text-amber-50 font-bold hidden md:block">Recent Auctions</div>
                </Link>


            </div>

        </div>
    );
};

export default Auctions;