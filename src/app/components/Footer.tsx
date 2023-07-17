import Image from "next/image";
import React from "react";
import {
    RiFacebookFill,
    RiTwitterFill,
    RiInstagramFill,
    RiLinkedinBoxFill,
    RiDiscordFill,
    RiGithubFill,
    RiYoutubeFill,
    RiTelegramFill,
    RiMediumFill,
    RiRedditFill,
    RiChromeFill
} from "react-icons/ri";

const Footer = () => {
    return (

        <footer className="flex-col p-6 gap-8 min-w-ful pt-6 bg-black text-white w-full flex items-center justify-center">
            <div className="grid grid-cols-4 gap-8 w-full mx-auto py-8 px-4">
                <div className="col-span-4 md:col-span-1 flex flex-col items-center justify-center gap-4 mb-8">
                    <div>
                        <Image src="/logo.png" width={150} height={100} alt="Logo"/>
                    </div>
                    <div className="grid grid-cols-6 md:grid-cols-5 gap-2"><a href="#"
                                                                              className="text-hover p-2 rounded-md hover:bg-blue-700 bg-zinc-600"><RiFacebookFill
                        className="w-6 h-6"/></a><a href="#"
                                                    className="text-hover p-2 rounded-md hover:bg-blue-700 bg-zinc-600">
                        <RiTwitterFill className="w-6 h-6"/> </a><a href="https://twitter.com/intent/follow?screen_name=hypermove_io"
                                                                    className="text-hover p-2 rounded-md hover:bg-blue-700 bg-zinc-600">
                        <RiInstagramFill className="w-6 h-6"/></a><a href="#"
                                                                     className="text-hover p-2 rounded-md hover:bg-blue-700 bg-zinc-600">
                        <RiLinkedinBoxFill className="w-6 h-6"/></a><a href="https://discord.com/invite/mMWPVXxAXK"
                                                                       className="text-hover p-2 rounded-md hover:bg-blue-700 bg-zinc-600"><RiDiscordFill
                        className="w-6 h-6"/></a><a href="#"
                                                    className="text-hover p-2 rounded-md hover:bg-blue-700 bg-zinc-600"><RiGithubFill
                        className="w-6 h-6"/></a>
                        <a href="#" className="text-hover p-2 sm:4 rounded-md hover:bg-blue-700 bg-zinc-600">
                            <RiYoutubeFill className="w-6 h-6"/>
                        </a><a href="#" className="text-hover p-2 rounded-md hover:bg-blue-700 bg-zinc-600">
                            <RiTelegramFill className="w-6 h-6"/>
                        </a><a href="https://t.me/Hypermove_io" className="text-hover p-2 rounded-md hover:bg-blue-700 bg-zinc-600">
                            <RiMediumFill className="w-6 h-6"/>
                        </a><a href="https://medium.com/@hypermove" className="text-hover p-2 rounded-md hover:bg-blue-700 bg-zinc-600">
                            <RiRedditFill className="w-6 h-6"/>
                        </a><a href="#" className="text-hover p-2 rounded-md hover:bg-blue-700 bg-zinc-600">
                            <RiChromeFill className="w-6 h-6"/>
                        </a></div>
                </div>
                <div className="col-span-auto md:col-span-auto flex flex-col justify-start items-start">
                    <h3 className="text-xl font-bold mb-auto">My Account</h3>
                    <ul className="flex flex-col gap-auto ">
                        <li><a href="#" className="text-gray-auto hover:text-violet-auto hover:underline">Profile</a>
                        </li>
                    </ul>
                </div>
                <div className="col-span-auto md:col-span-auto flex flex-col justify-start items-start"><h3
                    className="text-xl font-bold mb-auto">Resources</h3>
                    <ul className="flex flex-col gap-auto ">
                        <li><a href="#" className="text-gray-auto hover:text-violet-auto hover:underline">
                            Explore </a></li>
                        <li><a href="#" className="text-gray-auto hover:text-violet-auto hover:underline">Live Auctions</a>
                        </li>
                        <li><a href="#" className="text-gray-auto hover:text-violet-auto hover:underline">Activity</a></li>
                    </ul>
                </div>
                <div className="col-span-auto md:col-span-auto flex flex-col justify-start items-start"><h3
                    className="text-xl font-bold mb-auto">company</h3>
                    <ul className="flex flex-col gap-auto ">
                        <li><a href="#" className="text-gray-auto hover:text-violet-auto hover:underline">Contact Us</a>
                        </li>
                    </ul>
                </div>
            </div>
        </footer>);
};
export default Footer;