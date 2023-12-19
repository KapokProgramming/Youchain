import { useCallback, useEffect, useState } from "react";
import { ethers } from "ethers";

/**
 * Use Application flags
 *
 * `const [flags, setFlags] = useFlags();`
 *
 * Warning: setFlags causes page reload
 */

type EthWallet = {
	provider: ethers.Provider;
	signer: ethers.Signer;
};

export function useEthWallet() {
	const [ethWallet, setRawEthWallet] = useState<EthWallet>();

	useEffect(() => {
		fetchEthWallet();
	}, []);

	const fetchEthWallet = useCallback(async () => {
		const provider = new ethers.BrowserProvider(window.ethereum);
		const signer = await provider.getSigner();

		setRawEthWallet({ provider, signer } as EthWallet);
	}, []);

	return ethWallet;
}
