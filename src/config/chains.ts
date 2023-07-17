export type Chain = {
  /** name */
  name: string;
  /** icon */
  icon: string;
  /** rpc url */
  rpc_url: string | undefined;
  /** native currency */
  nativeCurrency?: string;
  /** chain exploler */
  exploler?: string;
};

export type ChainInfo = {
  [chainId: number]: Chain;
};

export enum SUPPORTED_CHAIN_IDS {
  Binance = 56,
  Polygon = 137,
  BOBA = 56288,
  METER = 82,
  TELOS = 40,
  OKX = 66,
  CRONOS = 25,
}

export const CHAINS: ChainInfo = {
  [SUPPORTED_CHAIN_IDS.Binance]: {
    name: "BNB",
    icon: "/images/chains/binance.png",
    rpc_url: process.env.NEXT_PUBLIC_BSC_RPC_URL,
    nativeCurrency: "BSC",
    exploler: "https://bscscan.com/",
  },
  [SUPPORTED_CHAIN_IDS.Polygon]: {
    name: "POLYGON",
    icon: "/images/chains/polygon.png",
    rpc_url: process.env.NEXT_PUBLIC_POLYGON_RPC_URL,
    nativeCurrency: "MATIC",
    exploler: "https://polygonscan.com/",
  },
  [SUPPORTED_CHAIN_IDS.BOBA]: {
    name: "BOBA",
    icon: "/images/chains/boba.png",
    rpc_url: process.env.NEXT_PUBLIC_BOBA_RPC_URL,
    nativeCurrency: "ETH",
    exploler: "https://blockexplorer.bnb.boba.network",
  },
  [SUPPORTED_CHAIN_IDS.METER]: {
    name: "METER",
    icon: "/images/chains/meter.png",
    rpc_url: process.env.NEXT_PUBLIC_METER_RPC_URL,
    nativeCurrency: "MTR",
    exploler: "https://scan.meter.io/",
  },
  [SUPPORTED_CHAIN_IDS.TELOS]: {
    name: "TELOS",
    icon: "/images/chains/telos.svg",
    rpc_url: process.env.NEXT_PUBLIC_TELOS_RPC_URL,
    nativeCurrency: "TLOS",
    exploler: "https://explorer.telos.net/",
  },
  [SUPPORTED_CHAIN_IDS.CRONOS]: {
    name: "CRONOS",
    icon: "/images/chains/cronos.png",
    rpc_url: process.env.NEXT_PUBLIC_CRONOS_RPC_URL,
    nativeCurrency: "CRO",
    exploler: "https://cronoscan.com/",
  },
  [SUPPORTED_CHAIN_IDS.OKX]: {
    name: "OKX",
    icon: "/images/chains/okx.jpg",
    rpc_url: process.env.NEXT_PUBLIC_OKX_RPC_URL,
    nativeCurrency: "OKT",
    exploler: "https://www.okx.com/explorer/oktc",
  },
};

interface ChainConfig {
  chainId: string;
  chainName: string;
  nativeCurrency: {
    name: string;
    symbol: string;
    decimals: number;
  };
  rpcUrls: string[];
  blockExplorerUrls: string[];
  iconUrls: string[];
}

export const chainConfig: { [chainId: number]: ChainConfig[] } = {
  [SUPPORTED_CHAIN_IDS.Binance]: [
    {
      chainId: "0x38",
      chainName: "Binance Smart Chain (Mainnet)",
      nativeCurrency: {
        name: "BNB",
        symbol: "BNB",
        decimals: 18,
      },
      rpcUrls: [""],
      blockExplorerUrls: ["https://bscscan.com/"],
      iconUrls: ["/images/chains/binance.png"],
    },
  ],
  [SUPPORTED_CHAIN_IDS.Polygon]: [
    {
      chainId: "0x89",
      chainName: "POLYGON Mainnet",
      nativeCurrency: {
        name: "MATIC TOKEN",
        symbol: "MATIC",
        decimals: 18,
      },
      rpcUrls: [""],
      blockExplorerUrls: ["https://polygonscan.com/"],
      iconUrls: ["/images/chains/polygon.png"],
    },
  ],
  [SUPPORTED_CHAIN_IDS.BOBA]: [
    {
      chainId: "0xdbe0",
      chainName: "BOBA Network",
      nativeCurrency: {
        name: "BOBA BNB",
        symbol: "ETH",
        decimals: 18,
      },
      rpcUrls: ["https://bnb.boba.network"],
      blockExplorerUrls: ["https://blockexplorer.bnb.boba.network"],
      iconUrls: ["/images/chains/boba.png"],
    },
  ],
  [SUPPORTED_CHAIN_IDS.METER]: [
    {
      chainId: "0x52",
      chainName: "METER Mainnet",
      nativeCurrency: {
        name: "METER",
        symbol: "MTR",
        decimals: 18,
      },
      rpcUrls: ["https://rpc.meter.io"],
      blockExplorerUrls: ["https://scan.meter.io/"],
      iconUrls: ["/images/chains/meter.png"],
    },
  ],
  [SUPPORTED_CHAIN_IDS.TELOS]: [
    {
      chainId: "0x28",
      chainName: "Telos EVM Mainnet",
      nativeCurrency: {
        name: "TELOS",
        symbol: "TLOS",
        decimals: 18,
      },
      rpcUrls: ["https://rpc1.eu.telos.net/evm"],
      blockExplorerUrls: ["https://explorer.telos.net/"],
      iconUrls: ["/images/chains/telos.svg"],
    },
  ],
  [SUPPORTED_CHAIN_IDS.OKX]: [
    {
      chainId: "0x42",
      chainName: "OKXCHAIN Mainnet",
      nativeCurrency: {
        name: "OKX",
        symbol: "OKT",
        decimals: 18,
      },
      rpcUrls: ["https://exchainrpc.okex.org"],
      blockExplorerUrls: ["https://www.okx.com/explorer/oktc"],
      iconUrls: ["/images/chains/okx.png"],
    },
  ],
  [SUPPORTED_CHAIN_IDS.CRONOS]: [
    {
      chainId: "0x19",
      chainName: "CRONOS MAINNET CHAIN",
      nativeCurrency: {
        name: "CRONOS",
        symbol: "CRO",
        decimals: 18,
      },
      rpcUrls: ["https://cronos-evm.publicnode.com"],
      blockExplorerUrls: ["https://cronoscan.com/"],
      iconUrls: ["/images/chains/cronos.png"],
    },
  ],
};
