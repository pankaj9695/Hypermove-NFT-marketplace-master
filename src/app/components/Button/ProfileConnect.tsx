"use client";
import { useWeb3React } from "@web3-react/core";
import React, { useState } from "react";
import { FaWallet } from "react-icons/fa";
import { AbstractConnector } from "@web3-react/abstract-connector";
import { injected } from "@/connectors";
// import useWalletManager from "../WalletManager"

interface ProfileConnectProps {
  classNames?: string;
  icon?: JSX.Element;
  title?: string;
  isText?: boolean;
}

const ProfileConnect: React.FC<ProfileConnectProps> = ({
  classNames = "text-sm lg:text-xl",
  icon = <FaWallet size={16} />,
  title = "Connect Wallet",
  isText = true,
}) => {
  const { activate, active, account } = useWeb3React();
  const [showMenu, setShowMenu] = useState(false); // this will keep track of the button state

  const activating = async () => {
    return activate(injected);
  };

  const toggleMenu = () => {
    setShowMenu(!showMenu); // this will toggle the menu visibility
  };

  return (
    <div className="relative">
      {" "}
      {/* this div will wrap the button and the menu */}
      <button
        onClick={active ? toggleMenu : activating} // call toggleMenu if active, otherwise call activating
        className={`${classNames} flex items-center space-x-2 rounded-full border-2 border-blue-500 px-4 py-2 text-white hover:bg-white hover:text-blue-500 hover:border-white`}
      >
        {icon}
        <span className={`lg:block ${isText ? "" : "hidden"}`}>
          {active && account
            ? account.slice(0, 6) + "..." + account.slice(-4) // this will show something like 0xED3d...cae
            : title}
        </span>
      </button>
      {active &&
        showMenu && ( // this will render the menu only if active and showMenu are true
          <div className="absolute right-0 mt-2 bg-white border border-gray-300 rounded shadow-lg transition-all duration-300 ease-in-out transform scale-95">
            {" "}
            {/* this div will style the menu and add a transition animation */}
            <ul className="py-1">
              {" "}
              {/* this ul will contain the menu items */}
              <li
                className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                onClick={activating}
              >
                {" "}
                {/* this li will be the disconnect button */}
                Disconnect
              </li>
            </ul>
          </div>
        )}
    </div>
  );
};

export default ProfileConnect;
