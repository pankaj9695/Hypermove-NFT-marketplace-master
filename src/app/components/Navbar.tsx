"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import {  FaBars, FaTimes } from "react-icons/fa";
import { motion } from "framer-motion";
import Link from "next/link";
import logo from "../../../public/logo.png";
import WalletManager from "./WalletManager";
import { useAppChainId } from "@/store/app/hook";
import ProfileConnect from "@/app/components/Button/ProfileConnect";
import SwitchNetwork from "@/app/components/Button/SwitchNetwork";
import { IoCloseOutline } from "react-icons/io5";
const Navbar = () => {
  const [activePage, setActivePage] = useState("home");
  const [searchTerm, setSearchTerm] = useState("");
  const [showSearch, setShowSearch] = useState(false);
  const [showSidebar, setShowSidebar] = useState(false); // State for sidebar visibility
  const router = useRouter();
  const handleCloseSidebar = () => {
    setShowSidebar(false);
  };
  const links = [
    {
      label: "Home",
      href: "/",
      active: activePage === "home",
    },
    {
      label: "Consumables",
      href: "/collection/consumables-164",
      active: activePage === "consumables",
    },
    {
      label: "Collectibles",
      href: "/collection/collectables-977",
      active: activePage === "collectibles",
    },
    {
      label: "In Game Assets",
      href: "/collection/in-game-assets-348",
      active: activePage === "in-game-assets",
    },
  ];

  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // do something with searchTerm
  };

  const chainId = useAppChainId();

  return (
      <nav className="flex items-center justify-between bg-zinc-950 p-4">
        <div className="flex flex-col items-start space-y-4 lg:space-y-0 lg:flex-row lg:items-center lg:space-x-4">
          <div className="lg:w-auto w-[180px]">
            <Link href="/">
              <Image src={logo} width={250} height={250} alt="Logo" />
            </Link>
          </div>

        </div>

        <div className="hidden 2xl:flex items-center gap-4 space-x-4 justify-between">
          <ul className="flex space-x-4 text-xl font-bold items-center">
            {links.map((link) => (
                <li key={link.label}>
                  <Link
                      href={link.href}
                      className={
                        link.active
                            ? "text-white hover:text-[#38FFDC]"
                            : "text-gray-400 hover:text-[#38FFDC]"
                      }
                  >
                    {link.label}
                  </Link>
                </li>
            ))}
          </ul>
        </div>

        <div className="flex items-center space-x-4 ">
          {showSearch && (
              <form onSubmit={handleSearch}>
                <input
                    type="text"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    placeholder="Search..."
                    className="rounded-md px-2 py-1 bg-gray-700 text-white focus:outline-none focus:border-blue-500 text-xl"
                />
              </form>
          )}
        <div className="mb-2">
            <SwitchNetwork />
        </div>
          <div className="mb-2">
            <WalletManager />
            <ProfileConnect isText={false} />
          </div>
          <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
          >
            <FaBars
                className="mb-2 w-8 h-8 text-gray-400 cursor-pointer 2xl:hidden"
                onClick={() => setShowSidebar(!showSidebar)}
            />
          </motion.div>


        </div>

        {showSidebar && (

            <motion.div
                initial={{ opacity: 0, x: -100 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3 }}
                className="z-40 fixed top-0 left-0 h-screen w-60 bg-zinc-950"
            >
              <motion.button
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3 }}
                  className="absolute top-4 right-4 bg-transparent border-none outline-none cursor-pointer"
                  onClick={handleCloseSidebar}
              >
                <IoCloseOutline size={24} color="#9ca3af" />
              </motion.button>
              <FaTimes
                  size={24}
                  color="#9ca3af"
                  onClick={() => setShowSidebar(false)}
                  className="absolute top-4 right-4 cursor-pointer"
              />
              <ul className="flex flex-col space-y-4 mt-8 pl-8">
                {links.map((link) => (
                    <li key={link.label}>
                      <Link
                          href={link.href}
                          className={`text-xl ${
                              link.active ? "text-white" : "text-gray-400"
                          }`}
                      >
                        {link.label}
                      </Link>
                    </li>
                ))}
              </ul>
            </motion.div>
        )}
      </nav>
  );
};

export default Navbar;
