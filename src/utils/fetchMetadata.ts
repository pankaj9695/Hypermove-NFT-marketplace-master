import { NftMatadata } from "@/types/nft";
import axios from "axios";

export async function getAllMetaData(URLs: string[]) {
  const response = await Promise.all(URLs.map((e) => axios.get(e)));
  const data = response?.map((item) => item?.data);
  return data;
}
