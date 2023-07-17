import React, { useState } from "react";
import { CHAINS } from "@/config/chains";
import { useWeb3React } from "@web3-react/core";
import { useAppChainId, useSwitchChainId } from "@/store/app/hook";
import Image from "next/image";
// Define a type for the props of the component

// Define the component as a function
const SwitchNetwork: React.FC = () => {
    const [showMenu, setShowMenu] = useState(false);

    const appChainId = useAppChainId();

    const handleClick = () => {
        // Toggle the showMenu state
        setShowMenu((prev) => !prev);
    };

    //   const handleSelect = (index: number) => {
    //     setShowMenu(false);
    //   };

    const switchChain = useSwitchChainId();

    // Add a new state for the selected icon
    const [selectedIcon, setSelectedIcon] = useState(CHAINS?.[Number(appChainId)]?.icon);

    return (
        <div className="z-40 relative">
            <button
                className=" flex items-center justify-center bg-stone-100 rounded-full sm:p-1 md:p-1 p-1 focus:outline-none xs:w-12 xs:h-12 sm:w-10 sm:h-10 md:w-8 md:h-8 lg:w-10 lg:h-10 xl:w-10 xl:h-10"
                onClick={handleClick}
            >
                {/* Use the selected icon instead of the appChainId icon */}

                <Image src={selectedIcon} alt="switch" width={30} height={30} />
            </button>
            {showMenu && (
                <div className="absolute top-full left-0 bg-white shadow-md rounded-md p-2 mt-2 pr-4">
                    {Object.entries(CHAINS).map((chain, index) => (
                        <div
                            key={index}
                            className="flex items-center p-2 hover:bg-gray-100 rounded-md"
                            onClick={() => {
                                // Switch the chain and update the selected icon
                                switchChain(Number(chain?.[0]));
                                setSelectedIcon(chain?.[1]?.icon);
                            }}
                        >
                            <img src={chain?.[1]?.icon} width={16} height={16} />
                            <span className="ml-2 px-4">{chain?.[1]?.name}</span>{" "}
                            {/* {Child && Child[index]} */}
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

// Export the component as default
export default SwitchNetwork;
