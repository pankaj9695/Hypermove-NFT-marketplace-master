import Image from "next/image";
import React from "react";
import WalletConnect from "@/app/components/Button/MainButton";
import { FaRocket, FaNewspaper } from "react-icons/fa";

const Banner = () => {
    return (
        <section className="flex h-[550px] w-full bg-[url('/Banner2.jpg')] bg-cover bg-no-repeat bg-center"> {/* use Banner2.jpg as the background, increase height to 550px */}
            <div className="flex w-full items-center px-4 py-8 md:px-8 md:py-12 lg:px-16 lg:py-16 xl:px-24 xl:py-20 2xl:px-32 2xl:py-24">
                <div className="w-full md:w-1/2 flex items-start justify-start flex-col gap-4"> {/* change justify-start to align heading more left */}
                   <div className="pt-80 sm:pt-0 lg:pt-0">
                    <h1 className="text-4xl text-left font-bold sm:text-3xl md:text-6xl text-amber-50 flex flex-col gap-4 "> {/* add margin-left 8 */}
                        <span>Unlock the</span>
                        <span> Hypermove Experience</span>
                    </h1>
                   </div>
                    <div className="flex gap-4">
                        <WalletConnect
                            classNames=""
                            title="Explore"
                            icon={<FaRocket size={15} />}
                            isText={true}
                        />
                        {/*<WalletConnect*/}
                        {/*    classNames=""*/}
                        {/*    title="Lend/Rent"*/}
                        {/*    icon={<FaNewspaper size={15} />}*/}
                        {/*    isText={true}*/}
                        {/*/>*/}
                    </div>
                </div>
                {/*<div className="hidden md:flex w-full md:w-1/2 justify-center items-center">*/} {/* remove this div */}
                {/*    <div className=" max-w-[700px]">*/}
                {/*        <Image src="/Banner2.jpg" layout="responsive" width={700} height={500} alt="Banner" />*/} {/* remove this Image component */}
                {/*    </div>*/}
                {/*</div>*/}
            </div>
        </section>
    );
};

export default Banner;
