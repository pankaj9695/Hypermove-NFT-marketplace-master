"use client"
import { motion } from "framer-motion";
import React, {useState} from "react";
import {FaHeart, FaWallet} from "react-icons/fa";
import MainButton from "@/app/components/Button/MainButton";
import Image from "next/image";
import {useRouter} from "next/navigation";
import { useAnimation } from "framer-motion";

interface CardProps {
    tokenId: string;
    image: string;
    imageText: string;
    price: string;
    loveCount: number;
    label: string;
    isHoverable: boolean;
    multiplier?: string;
}

const Card: React.FC<CardProps> = ({
                                       tokenId,
                                       image,
                                       imageText,
                                       price,
                                       loveCount,
                                       label,
                                       isHoverable,
                                       multiplier,
                                   }) => {
    const [isHovered, setIsHovered] = useState(false);
    const router = useRouter();

    const handleMouseEnter = () => {
        setIsHovered(true);
    };

    const handleMouseOut = () => {
        setIsHovered(false);
    };

    const handleBuyNow = () => {
        router.push(`/nft?tokenId=${tokenId}`);
    };

    return (
        <div
            className="hover:-translate-y-2 mb-6 transition-all ease-in-out duration-500 w-90 p-4 flex flex-col gap-4 bg-[#17171b] rounded-2xl overflow-hidden relative"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseOut}
        >
            <div className="flex justify-between items-center gap-2 w-full">
                <div
                    className="sm:text-sm md:text-xl lg:text-xl te text-stone-200 flex items-center justify-center gap-2"
                >
                    {imageText && <p className="mb-2 font-bold ">{imageText}</p>}
                </div>
                <div className="flex mb-4">
                    <div className="flex items-center bg-black/40  p-1 text-sm">
                        <FaHeart className="text-white mr-2" />
                        <span className="text-white font-sans">{loveCount}</span>
                    </div>
                </div>
            </div>
            {image && (
                <div className="flex justify-center">
                    {/* Wrap the Image component with motion.div and add animation properties */}
                    <motion.div
                        animate={{ x: [0, -10, 0] }}
                        transition={{ duration: 2, ease: "easeInOut", repeat: Infinity }}
                        style={{ x: 0 }} // start from the original position
                    >
                        <Image
                            className="rounded-[40px] px-4"
                            src={image}
                            height={600}
                            width={300}
                            alt=""
                        />
                    </motion.div>
                    {isHoverable && isHovered && (
                        <div
                            className="absolute top-0 transition-all ease-in-out duration-500 left-0 w-full h-full bg-black/30 flex justify-center items-center"
                        >
                            <MainButton
                                title="Buy Now"
                                classNames="text-sm buy-button" // add custom class name here
                                icon={<FaWallet size={16} />}
                                isText={true}
                                onClick={handleBuyNow}
                            />
                        </div>
                    )}
                </div>
            )}

            <div className="flex p-4 justify-between items-start flex-col w-full">
                {price && (
                    <div
                        className="display: flex align-items: center justify-content: space-between margin-right: 10px"
                    >
                        <div className="flex justify-start items-start mb-2 flex-col w-full">
                            <div className="flex justify-between gap-2">
              <span className="text-gray-300 mb-4 font-bold text-2xl">
                Multiplier
              </span>
                                <span className="text-white mb-4 font-bold text-2xl">
                {multiplier}
              </span>
                            </div>
                            <div className="flex justify-between gap-2">
                                <span className=" text-xl text-stone-400">Price</span>
                                <span className="text-2xl text-blue-300 font-bold">{price}</span>

                                {/*<p className="text-sm text-center flex justify-center items-center px-2 rounded-xl bg-blue-700">*/}
                                {/*  {label}*/}
                                {/*</p>*/}
                            </div>
                        </div>

                        {!isHoverable && (
                            // Move the MainButton component here and add custom class name
                            <MainButton
                                title="Buy Now"
                                classNames="text-sm buy-button"
                                icon={<FaWallet size={16} />}
                                isText={true}
                                onClick={handleBuyNow}
                            />
                        )}
                    </div>
                )}
            </div>
        </div>
    );
};

export default Card;

