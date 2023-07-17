"use client";
import "./globals.css";
import React from "react";
import { DM_Sans } from "next/font/google"; // import DM Sans font
import Navbar from "@/app/components/Navbar";
import Head from "next/head";
import Footer from "@/app/components/Footer";
import { Web3ReactProvider } from "@web3-react/core";
import {
  ExternalProvider,
  JsonRpcFetchFunc,
  Web3Provider,
} from "@ethersproject/providers";
import { Provider } from "react-redux";
import store, { persistor } from "../store";
import { PersistGate } from "redux-persist/integration/react";
import WalletManager from "./components/WalletManager";
import { QueryResolver } from "./QueryResolver";

const getLibrary = (provider: ExternalProvider | JsonRpcFetchFunc) => {
  return new Web3Provider(provider);
};

const dm_sans = DM_Sans({ subsets: ["latin"], weight: "400" }); // create DM Sans font object with weight "400"

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={dm_sans.className}>
        {" "}
        {/* use DM Sans font class */}
        <Provider store={store}>
          <PersistGate loading={null} persistor={persistor}>
            <Web3ReactProvider getLibrary={getLibrary}>
              <WalletManager />
              <QueryResolver />
              <Head>
                <title>HyperMove</title>
                <meta name="description" content="HyperMove" />
              </Head>
              <Navbar />
              {children}
              <Footer />
            </Web3ReactProvider>
          </PersistGate>
        </Provider>
      </body>
    </html>
  );
}
