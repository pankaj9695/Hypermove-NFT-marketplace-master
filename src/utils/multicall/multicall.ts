import { ICall, IResponse } from "@makerdao/multicall";
import { multicall } from ".";

interface TokenSale {
  seller: string;
  tokenId: number;
  price: number;
  quantity: number;
  active: boolean;
}

export const createMulticallForSale = (
  target: string,
  args: string[]
): ICall => {
  return {
    target,
    call: ["_sales(uint256)(address,uint256,uint256,uint256,bool)", ...args],
    returns: [
      [`seller_${parseInt(args[0])}`],
      [`tokenId_${parseInt(args[0])}`],
      [`price_${parseInt(args[0])}`],
      [`quantity_${parseInt(args[0])}`],
      [`active_${parseInt(args[0])}`],
    ],
  };
};

export const createCallsForSale = (target: string, tokenIds: number[]) => {
  let calls: ICall[] = [];
  for (let i = 0; i < tokenIds.length; i++) {
    calls.push(createMulticallForSale(target, [tokenIds[i].toString()]));
  }
  return calls;
};

export const getMulticallSale = async (
  chainId: number,
  target: string,
  tokenIds: number[]
): Promise<{
  [key: string]: TokenSale;
} | null> => {
  if (tokenIds?.length === 0) return null;
  try {
    const calls = createCallsForSale(target, tokenIds) as ICall[];

    const OwnerMulticall: IResponse = await multicall(chainId, calls);

    let assets: {
      [key: string]: TokenSale;
    } = {};

    const originalResponse = OwnerMulticall.results.original;

    for (let i = 1; i <= tokenIds?.length; i++) {
      assets[i] = {
        seller: originalResponse?.[`seller_${i}`],
        tokenId: i,
        price: Number(originalResponse?.[`price_${i}`]),
        quantity: Number(originalResponse?.[`quantity_${i}`]),
        active: originalResponse?.[`active_${i}`],
      };
    }

    return assets;
  } catch (err) {
    if (err instanceof Error) {
      console.log("getMulticallSale", err?.message);
    }
    return null;
  }
};
