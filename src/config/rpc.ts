export const telosRpc = String(process.env.NEXT_PUBLIC_TELOS_RPC_URL);
export const meterRpc = String(process.env.NEXT_PUBLIC_METER_RPC_URL);
export const bobaRpc = String(process.env.NEXT_PUBLIC_BOBA_RPC_URL);
export const okxRpc = String(process.env.NEXT_PUBLIC_OKX_RPC_URL);
export const cronosRpc = String(process.env.NEXT_PUBLIC_CRONOS_RPC_URL);
export const bscRpc = String(process.env.NEXT_PUBLIC_BSC_RPC_URL);
export const polygonRpc = String(process.env.NEXT_PUBLIC_POLYGON_RPC_URL);
export const shardeumRpc = String(process.env.NEXT_PUBLIC_SHARDEUM_RPC_URL);

export const rpcUrls: { [chainId: number]: string } = {
  56: bscRpc, // bnb
  137: polygonRpc, // polygon
  56288: bobaRpc, // boba
  25: cronosRpc, // cronos
  82: meterRpc, // meter
  66: okxRpc, // okx
  40: telosRpc, // telos
};
