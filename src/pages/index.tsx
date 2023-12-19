import { ComponentWrapperPage } from "@/components/ComponentWrapperPage";
import { useBosComponents } from "@/hooks/useBosComponents";
import { useDefaultLayout } from "@/hooks/useLayout";
import type { NextPageWithLayout } from "@/utils/types";
import { count } from "console";
import { ethers } from "ethers";
import { abi } from "@/data/atomic_abi";
import { useEthWallet } from "@/hooks/useWallet";
import { getAtomic } from "@/lib/atomic/contract";
import { useEffect, useState } from "react";

const HomePage: NextPageWithLayout = () => {
	const components = useBosComponents();
	const ethWallet = useEthWallet();

	const details = [
		{
			title: "Top 10 Best Video Games of the Decade",
			description:
				"Are you looking for the most popular online games that have been played over time? You have just discovered the best list of the ten most popular online games from the more well-known and less specialized gaming types. With advanced technology and other new sources, online games are played all over the world.",
			date: "7 days ago",
			image: "",
		},
	];

	const ranking = [
		"BitKub",
		"JFIN Chain",
		"DEPA",
		"Inspex",
		"I am Able",
		"KillSwitch",
		"ContributionDAO",
		"ETH Padthai",
		"CAMT 20",
		"FINT",
	];

	function rankingComponent(items: any) {
		const storage = [];
		for (let i = 0; i < items.length; i++) {
			const isLast = i == items.length - 1;
			storage.push(
				<div className={`w-full h-12 flex flex-row p-6`}>
					<div
						className={`w-full h-12 pt-2 justify-between flex flex-row rounded-sm border-b-2 cursor-pointer hover:bg-gray-500 hover:brightness-125 ${
							isLast ? "border-b-0 " : ""
						}`}>
						<p className="text-lg font-bold text-white ml-6 pl-2 rounded-sm w-1/2">
							{items[i]}
						</p>
						<p
							className={`text-lg font-bold text-white mr-6 pr-2 rounded-sm w-1/2 text-end`}>
							{i + 1}
						</p>
					</div>
				</div>
			);
		}
		return storage;
	}

	// let videos: object[] = [];
	const [videos, setVideos] = useState<Array<Object>>([]);
	useEffect(() => {
		if (ethWallet?.signer) {
			getAtomic(ethWallet.signer)
				.getLatestVideos(10)
				.then((res) => {
					console.log(res);
					let videos_temp: Object[] = [];
					res.forEach((element: ethers.Result) => {
						videos_temp.push({
							id: Number(element[0][0]),
							title: element[0][1],
							description: element[0][2],
							owner: element[1],
							src: element[0][3],
							thumbnail: element[0][4],
							timestamp: Number(element[0][7]),
						});
					});
					setVideos(videos_temp);
				});
		}
	}, [ethWallet]);

	function displayVideoDetails(videos_arr: object[]) {
		const details = [];
		for (let i = 0; i < videos_arr.length; i++) {
			details.push(
				<ComponentWrapperPage
					src={components.videoCard}
					componentProps={{ video: videos_arr[i] }}
				/>
			);
		}
		return details;
	}

	return (
		<>
			<div className="w-full h-3/6 mt-2 gap-2">
				<div className="w-full h-5/6 flex flex-row mt-12 gap-2 mr-2">
					<div className="w-full cursor-pointer overflow-hidden rounded-md h-full relative bg-gradient-to-t from-pink-300 via-purple-300 to-indigo-400 ">
						<div className="w-full flex flex-col absolute inset-x-0 bottom-0 mb-5 ml-4 ">
							<p className="text-4xl font-bold text-white">
								{" "}
								{details[0].title}{" "}
							</p>
							<p className=" text-xl w-5/6 text-white">
								{details[0].description}
							</p>
							<p className="text-gray-300 text-md">
								{" "}
								{details[0].date}{" "}
							</p>
						</div>
					</div>

					<div className="w-2/4 bg- overflow-hidden h-full relative rounded-md overflow-y-scroll scrollbar-hide bg-[radial-gradient(ellipse_at_right,_var(--tw-gradient-stops))] from-gray-700 via-gray-900 to-black">
						<p className="Title text-white text-2xl pr-4 pl-4 pt-4">
							{" "}
							Trend
						</p>
						{rankingComponent(ranking)}
					</div>
				</div>
			</div>

			<div id="News" className="w-full h-full">
				<p className="font-bold ml-8 text-lg">Recommendation</p>
				<div className="ml-16 mt-10">{displayVideoDetails(videos)}</div>
				{/* <ComponentWrapperPage src={components.videoList}></ComponentWrapperPage> */}
			</div>
		</>
	);
};
HomePage.getLayout = useDefaultLayout;

export default HomePage;
