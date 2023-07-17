import {currency} from "@/config/network";
import {useBuy} from "@/hooks/useBuy";
import {useAppChainId} from "@/store/app/hook";
import React from "react";
import {
    FaEye,
    FaHeart,
    FaGlobeAmericas,
    FaTag,
    FaWallet,
    FaPlus,
    FaMinus,
} from "react-icons/fa";
import Image from "next/image";

interface PurchaseProps {
    image: string;
    heading: string;
    headingNumber: string;
    loveCount: number;
    polygon: string;
    gamingAsset: string;
    createdBy: string;
    contractAddress: string;
    itemId: string;
    price: string;
    collection: string;
    inGameAsset: string;
    quantity: number;
    availbleToBuy: boolean;
}

const Purchase = ({
                      image,
                      heading,
                      headingNumber,
                      loveCount,
                      polygon,
                      gamingAsset,
                      createdBy,
                      contractAddress,
                      itemId,
                      price,
                      collection,
                      inGameAsset,
                      quantity,
                      availbleToBuy,
                  }: PurchaseProps) => {
    const [count, setCount] = React.useState(1);

    const handleDecreaseCount = () => {
        if (count > 1) {
            setCount(count - 1);
        }
    };

    const handleIncreaseCount = () => {
        setCount(count + 1);
    };

    const {buyCallback} = useBuy();

    const appChainId = useAppChainId();

    return (
        <div className="m-2 sm:m-4 md:m-8 lg:m-12 xl:m-24">
            <div className="p-16 flex text-white flex-col md:flex-row justify-center md:justify-between items-center">
                <div className="flex items-center md:w-1/4">

                    <Image className="rounded-2xl w-full" src={image} alt="NFT" height={800}
                           width={600}
                    />
                </div>
                <div className="md:ml-8">
                    <h2 className="font-bold md:4xl text-6xl mb-6">
                        {heading} {headingNumber}
                    </h2>
                    <p className="font-sans text-2xl">
                        Obtain a 700% increase in your income.
                    </p>
                    <div className="flex mb-4">
                        <div className=" flex items-center bg-black rounded-2xl p-2 text-sm my-2">
                            <FaEye className="text-white mr-2"/>
                            <span className="text-white font-sans">{loveCount}</span>
                        </div>
                        <div className="ml-1 flex items-center bg-black rounded-2xl p-2 text-sm my-2">
                            <FaHeart className="text-white mr-2"/>
                            <span className="text-white font-sans">{loveCount}</span>
                        </div>
                        <div className="ml-1 flex items-center bg-black rounded-2xl p-2 text-sm my-2">
                            <FaGlobeAmericas className="text-white mr-2"/>
                            <span className="text-white font-sans">{polygon}</span>
                        </div>
                        <div className="ml-1 flex items-center bg-black rounded-2xl p-2 text-sm my-2">
                            <FaTag className="text-white mr-2"/>
                            <span className="text-white font-sans">{gamingAsset}</span>
                        </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-4">
                        <div className="p-2 rounded-2xl shadow bg-[#343444]">
                            <p className="font-sans text-gray-400">Created By</p>
                            <p className="font-bold">{createdBy}</p>
                        </div>

                        <div className="p-2 rounded-2xl shadow bg-[#343444]">
                            <p className="font-sans text-gray-400">Contract Address</p>
                            <p>{contractAddress.slice(0, 10) + "..." + contractAddress.slice(-4)}</p>
                        </div>

                        <div className="p-2 rounded-2xl flex justify-between shadow bg-[#343444]">
                            <div className="flex justify-between gap-2">
                                <p className="font-sans text-gray-400">ITEM ID</p>
                                <p>{itemId}</p>
                            </div>
                            <div>
                                <p>
                                    {price + " "} {currency?.[appChainId]}
                                </p>
                            </div>
                        </div>

                        <div className="p-2 rounded-2xl flex justify-between shadow bg-[#343444]">
                            <div className="flex justify-between">
                                <p className="font-sans text-gray-400 mr-3">Collection</p>
                                <p>{inGameAsset}</p>
                            </div>
                        </div>
                    </div>

                    <p>Select no. of tokens ({quantity} Tokens available for sale.)</p>

                    <div className="flex items-center my-4 mr-2">
                        <div
                            className="flex items-center justify-center rounded-full border-2 border-blue-500 w-10 h-10">
                            <button onClick={handleDecreaseCount} className="text-blue-500">
                                <FaMinus/>
                            </button>
                        </div>
                        <div className="mx-4 text-center w-12">
                            <input
                                type="number"
                                value={count}
                                onChange={(e) => setCount(parseInt(e.target.value))}
                                className="text-center bg-transparent border-b-2 border-blue-500 text-white w-full"
                            />
                        </div>
                        <div
                            className="flex items-center justify-center rounded-full border-2 border-blue-500 w-10 h-10">
                            <button onClick={handleIncreaseCount} className="text-blue-500">
                                <FaPlus/>
                            </button>
                        </div>

                        <button
                            onClick={() => buyCallback(Number(itemId), count, Number(price))}
                            className={`ml-12 flex items-center space-x-2 rounded-full border-2 border-blue-500 px-4 py-2 text-blue-500 hover:bg-white hover:border-white`}
                            disabled={availbleToBuy}
                        >
                            <FaWallet size={16} className="text-blue-500"/>
                            <span>Buy Now</span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Purchase;
