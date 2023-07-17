import { ICall, IResponse, aggregate } from "@makerdao/multicall";
import { isEmpty } from "lodash";

import { rpcUrls } from "@/config/rpc";
import { multicallAddresses } from "@/config/multicall";

export const multicall = async (
  chainId: number,
  calls: ICall[]
): Promise<IResponse> => {
  if (isEmpty(calls)) return null;
  const results = await aggregate(calls, {
    rpcUrl: rpcUrls[chainId],
    multicallAddress: multicallAddresses[chainId],
  });
  return results;
};
