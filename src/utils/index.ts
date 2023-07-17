import { Web3Provider } from "@ethersproject/providers";
import { BigNumber } from "ethers";
import { formatUnits, parseUnits } from "ethers/lib/utils";

export const gasPrice = async (library: Web3Provider): Promise<BigNumber> => {
  return await library.getGasPrice();
};

export const unitParser = (
  units: string | number,
  decimals: number = 18
): BigNumber => {
  if (!units) return BigNumber.from(0);
  return parseUnits(units.toString(), decimals ? decimals : 18);
};

export const unitFormatter = (
  units: string | BigNumber,
  decimals: number = 18
): number => {
  if (!units) return 0;
  return Number(formatUnits(units, decimals ? decimals : 18));
};
