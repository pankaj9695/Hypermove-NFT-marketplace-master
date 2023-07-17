import { Interface } from "ethers/lib/utils";
import MarketplaceABI from "../config/ABI/Marketplace.json";

export const getMarketplaceInterface = () => {
  return new Interface(MarketplaceABI);
};

/**
 * get NFT Marketplace encoded data
 * @param iface
 * @param methodName
 * @param values
 * @returns
 */
export const getMarketplaceCallData = (
  iface: Interface,
  methodName: string,
  values?: any[]
): string => {
  return iface.encodeFunctionData(methodName, values);
};
