import { ethers } from "ethers";
import { abi } from "@/data/atomic_abi";

export let getAtomic = (signer: ethers.Signer) => {
	return new ethers.Contract(
		"0x5BfC487da8Da663CcCAEb6aF594F953D976cf9f3",
		abi,
		signer
	);
};
