import { chainConfig, SUPPORTED_CHAIN_IDS } from "../config/chains";
import { APP_LOGO, APP_NAME } from "../config";

// connectors
import { InjectedConnector } from "@web3-react/injected-connector";

export let supportedChainIds = Object.keys(SUPPORTED_CHAIN_IDS)
  .map((key) => (SUPPORTED_CHAIN_IDS as any)[key])
  .filter((e) => typeof e === "number") as number[];

let rpcUrls = {} as { [chainId: number]: string };

for (let k = 0; k < supportedChainIds?.length; k++) {
  rpcUrls[supportedChainIds[k]] = chainConfig?.[k]?.[0]?.rpcUrls?.[0];
}

export const injected = new InjectedConnector({
  supportedChainIds,
});
