import { useSetToken } from "@/store/tokens/hook";

export function QueryResolver() {
  useSetToken();
  return null;
}
