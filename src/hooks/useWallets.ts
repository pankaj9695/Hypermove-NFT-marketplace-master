import { useState, useEffect, useCallback } from "react";
import { useWeb3React } from "@web3-react/core";
import { isMobile } from "react-device-detect";
import { injected } from "../connectors";
import { InjectedConnector } from "@web3-react/injected-connector";
import { Web3Provider } from "@ethersproject/providers";

export const useDisconnect = () => {
  const { connector, deactivate, activate } = useWeb3React<Web3Provider>();
  return useCallback(async () => {
    if (connector instanceof InjectedConnector) {
      ///@ts-ignore
      await activate(null);
    }
    // for every wallet
    deactivate();
  }, [connector, deactivate, activate]);
};

export function useWeb3EagerConnect() {
  const { activate, active } = useWeb3React<Web3Provider>();

  const [tried, setTried] = useState(false);
  useEffect(() => {
    if (isMobile) {
      activate(injected)
        .then(() => {
          setTried(true);
        })
        .catch(() => {
          setTried(false);
        });
      return;
    }

    injected.isAuthorized().then((isAuthorized: boolean) => {
      if (isAuthorized) {
        activate(injected, undefined, true).catch(() => {
          setTried(true);
        });
      } else {
        setTried(true);
      }
    });
    // eslint-disable-next-line
  }, [activate]); // intentionally only running on mount (make sure it's only mounted once :))

  // if the connection worked, wait until we get confirmation of that to flip the flag
  useEffect(() => {
    if (!tried && active) {
      setTried(true);
    }
  }, [tried, active]);

  return tried;
}

export function useInactiveListener(suppress = false) {
  const { active, error, activate, chainId } = useWeb3React<Web3Provider>();

  useEffect(() => {
    const { ethereum } = window as any;
    if (ethereum && ethereum.on && !active && !error && !suppress) {
      const handleConnect = () => {
        activate(injected);
      };

      const handleChainChanged = () => {
        activate(injected, (err) => err.message);
      };

      const handleAccountsChanged = (accounts: string[]) => {
        if (accounts.length > 0) {
          return activate(injected);
        } else {
          return undefined;
        }
      };

      ethereum.on("connect", handleConnect);
      ethereum.on("chainChanged", handleChainChanged);
      ethereum.on("accountsChanged", handleAccountsChanged);

      return () => {
        if (ethereum.removeListener) {
          ethereum.removeListener("connect", handleConnect);
          ethereum.removeListener("chainChanged", handleChainChanged);
          ethereum.removeListener("accountsChanged", handleAccountsChanged);
        }
      };
    } else {
      return undefined;
    }
  }, [active, error, suppress, activate, chainId]);
}
