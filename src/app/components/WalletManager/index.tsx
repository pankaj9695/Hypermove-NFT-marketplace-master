import React from "react";
import { useWeb3React } from "@web3-react/core";
import { useInactiveListener, useWeb3EagerConnect } from "@/hooks/useWallets";

const WalletManager = (): null => {
    const context = useWeb3React();
    const { connector } = context;

    const [activatingConnector, setActivatingConnector] = React.useState<any>();
    React.useEffect(() => {
        if (activatingConnector && activatingConnector === connector) {
            setActivatingConnector(undefined);
        }
    }, [activatingConnector, connector]);

    // handle logic to eagerly connect to the injected ethereum provider, if it exists and has granted access already
    const triedEager = useWeb3EagerConnect();

    // handle logic to connect in reaction to certain events on the injected ethereum provider, if it exists
    useInactiveListener(!triedEager || !!activatingConnector);

    return null;
};

export default WalletManager;