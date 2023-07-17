import { useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import { AppState } from "./../index";
import { useWeb3React } from "@web3-react/core";
import { AppDispatch } from "./../index";
import { supportedChainIds } from "../../connectors";
import { setAppChainId } from ".";
import { chainConfig } from "../../config/chains";
import { utils } from "ethers";

export const useSwitchChainId = () => {
  const { library } = useWeb3React();
  const dispatch = useDispatch<AppDispatch>();

  return useCallback(
    async (newAppChainId: number, noSwitch?: boolean) => {
      console.log("newAppChainId", newAppChainId);
      const isMetaMask = window.ethereum && window.ethereum.isMetaMask;
      try {
        if (!supportedChainIds.includes(newAppChainId)) return null;
        if (isMetaMask && !noSwitch) {
          await library.provider.request({
            method: "wallet_switchEthereumChain",
            params: [{ chainId: utils.hexValue(newAppChainId) }],
          });
        }

        dispatch(setAppChainId({ chainId: newAppChainId }));

        return true;
      } catch (err:any) {//any add temp

        if (err.code === 4902) {
          const ethereum = window?.ethereum;
          /// @ts-ignore
          await ethereum.request({
            method: "wallet_addEthereumChain",
            params: chainConfig[newAppChainId],
          });
          dispatch(setAppChainId({ chainId: newAppChainId }));
        }
        console.log("Error in change of app chainId: ", err.message);
        return false;
      }
    },
    [dispatch, library]
  );
};

export const useAppChainId = () => {
  return useSelector((state: AppState) => state.app.chainId);
};
