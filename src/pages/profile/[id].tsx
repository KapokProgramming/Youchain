import { ComponentWrapperPage } from "@/components/ComponentWrapperPage";
import { useBosComponents } from "@/hooks/useBosComponents";
import { useDefaultLayout } from "@/hooks/useLayout";
import { useEthWallet } from "@/hooks/useWallet";
import { getAtomic } from "@/lib/atomic/contract";
import { useAuthStore } from "@/stores/auth";
import type { NextPageWithLayout } from "@/utils/types";
import { ethers } from "ethers";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const ProfilePage: NextPageWithLayout = () => {
	const components = useBosComponents();
	const router = useRouter();
	const profile_id = router.query.id;
	const ethWallet = useEthWallet();
	// const accountId = useAuthStore((store) => store.accountId);
	const [videos, setVideos] = useState<Array<Object>>([]);
	useEffect(() => {
		if (ethWallet?.signer) {
			getAtomic(ethWallet.signer)
				.getVideoByNearID(profile_id)
				.then((res) => {
					console.log(res);
					let videos_temp: Object[] = [];
					res.forEach((element: ethers.Result) => {
						videos_temp.push({
							id: Number(element[0][0]),
							title: element[0][1],
							description: element[0][2],
							src: element[0][3],
							thumbnail: element[0][4],
							timestamp: Number(element[0][7]),
						});
					});
					setVideos(videos_temp);
				});
		}
	}, [ethWallet]);

	function displayVideoDetails(videos: object[]) {
		const details = [];
		for (let i = 0; i < videos.length; i++) {
			details.push(
				<Link href={`/play/${videos[i]["id"]}`}>
					<div className=" rounded-lg overflow-hidden flex flex-col bg-gray-200 hover:bg-gray-500 shadow-md">
						<img
							src={videos[i]["thumbnail"]}
							className="video w-full h-48 object-cover"
						/>
						<div className="flex flex-col gap-2 py-2">
							<p className="text-black w-full pl-2 whitespace-nowrap mt-2">
								{videos[i]["title"]}
							</p>
							<div className="pl-2 text-xs font-light">
								{" "}
								{new Date(
									videos[i]["timestamp"] * 1000
								).toUTCString()}
							</div>
						</div>
					</div>
				</Link>
			);
		}
		return details;
	}

	return (
		<>
			<div className="w-full h-24 bg-red-50">
				<input
					type="text"
					className="w-2/4 mt-6 ml-6 h-2/4 rounded-md pl-5 border-solid border-2 border-gray-400"
					placeholder="Search for videos"
				/>
			</div>
			<div>
				<ComponentWrapperPage
					src={components.profileBanner}
					componentProps={{ accountId: profile_id }}
				/>
			</div>
			<div className="w-full h-full mt-2">
				<div className="flex flex-col w-full h-full mt-4 gap-4">
					<p className="text-black font-bold text-4xl ml-6 mt-6 ">
						Videos
					</p>
					<div className="grid grid-cols-4 h-full w-full gap-4">
						{displayVideoDetails(videos)}
					</div>
				</div>
			</div>
		</>
	);
};

ProfilePage.getLayout = useDefaultLayout;

export default ProfilePage;
