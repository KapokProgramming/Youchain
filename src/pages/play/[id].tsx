import { useDefaultLayout } from "@/hooks/useLayout";
import { CommentCardProp, type NextPageWithLayout } from "@/utils/types";
import { BiSolidLike } from "react-icons/bi";
import { BiSolidDislike } from "react-icons/bi";
import { CgGitFork } from "react-icons/cg";
import { useEffect, useState } from "react";
import Router, { useRouter } from "next/router";
import { ComponentWrapperPage } from "@/components/ComponentWrapperPage";
import { useBosComponents } from "@/hooks/useBosComponents";
import { useAuthStore } from "@/stores/auth";
import { useEthWallet } from "@/hooks/useWallet";
import { getAtomic } from "@/lib/atomic/contract";
import { ethers } from "ethers";
import Comment from "@/components/lib/Comment/Comment";
import Link from "next/link";

const PlayPage: NextPageWithLayout = () => {
	const ethWallet = useEthWallet();
	// const accountId = useAuthStore((store) => store.accountId);
	const [video, setVideo] = useState<Object>([]);
	useEffect(() => {
		if (ethWallet?.signer) {
			getAtomic(ethWallet.signer)
				.getVideo(router.query.id)
				.then((res) => {
					setVideo({
						id: Number(res[0][0]),
						title: res[0][1],
						description: res[0][2],
						owner: res[1],
						src: res[0][3],
						thumbnail: res[0][4],
						timestamp: Number(res[0][7]),
					});
				});
		}
	}, [ethWallet]);
	const [videos, setVideos] = useState<Array<Object>>([]);
	useEffect(() => {
		if (ethWallet?.signer) {
			getAtomic(ethWallet.signer)
				.getLatestVideos(3)
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
	const [comments, setComments] = useState<Array<Object>>([]);
	useEffect(() => {
		if (ethWallet?.signer) {
			getAtomic(ethWallet.signer)
				.getComments(router.query.id)
				.then((res) => {
					console.log(res);
					let comments_temp: Object[] = [];
					res.forEach((element: ethers.Result) => {
						getAtomic(ethWallet.signer)
							.getAddressNearID(element[0])
							.then((near_id) => {
								comments_temp.push({
									poster: near_id,
									message: element[1],
									amount: Number(element[2]),
									timestamp: Number(element[3]),
								});
							});
					});
					setComments(comments_temp);
				});
		}
	}, [ethWallet]);

	const [likeCount, setLikeCount] = useState(128);
	const [dislikeCount, setDislikeCount] = useState(12);
	const [isLiked, setIsLiked] = useState(false);
	const [isDisliked, setIsDisliked] = useState(false);
	const [forkCount, setForkCount] = useState(3);
	const [isFork, setIsFork] = useState(false);
	const router = useRouter();
	const [commentCount, setcommentCount] = useState(3);
	const signedIn = useAuthStore((store) => store.signedIn);
	function commentLayout(id: number) {
		const details: object[] = [];
		// const target = videos[id];
		// if (target.comment!.length < 1) return details;
		// for (let i = 0; i < target.comment.length; i++) {
		// 	details.push(
		// 		<div className="VStack">
		// 			<div className="HStack">
		// 				<div>users' profile</div>
		// 				<div className="VStack">
		// 					<p> {target.comment[i].user}</p>
		// 					<p> {target.comment[i].comment}</p>
		// 				</div>
		// 			</div>
		// 		</div>
		// 	);
		// }
		return details;
	}
	const fork = (id: string) => {
		if (!isFork) {
			setForkCount(forkCount + 1);
			setIsFork(true);
			// window.location.href = `upload?fork=${id}`;
			Router.push({
				pathname: "/upload",
				query: { fork: id },
			});
		} else {
			setForkCount(forkCount - 1);
			setIsFork(false);
		}
	};

	const toggleLike = () => {
		if (!isLiked) {
			setLikeCount(likeCount + 1);
			setIsLiked(true);

			// If the video was disliked before, decrement dislike count
			if (isDisliked) {
				setDislikeCount(dislikeCount - 1);
				setIsDisliked(false);
			}
		} else {
			setLikeCount(likeCount - 1);
			setIsLiked(false);
		}

		console.log("isLiked:", isLiked);
	};

	const toggleDislike = () => {
		if (!isDisliked) {
			setDislikeCount(dislikeCount + 1);
			setIsDisliked(true);

			// If the video was liked before, decrement like count
			if (isLiked) {
				setLikeCount(likeCount - 1);
				setIsLiked(false);
			}
		} else {
			setDislikeCount(dislikeCount - 1);
			setIsDisliked(false);
		}
	};

	const components = useBosComponents();

	const [showFullDescription, setShowFullDescription] = useState(false);

	function toggleDescription() {
		setShowFullDescription(!showFullDescription);
	}

	function displayVideoList(videos: object[]) {
		const details = [];
		for (let i = 0; i < videos.length; i++) {
			details.push(
				<ComponentWrapperPage
					src={components.videoCard}
					componentProps={{ video: videos[i] }}
				/>
			);
		}
		return details;
	}

	function displayVideoDetails(video: object) {
		if (!video["description"]) {
			return;
		}
		const wordsInDescription = video["description"].split(/\s+/);
		const truncatedDescription =
			wordsInDescription.length > 10
				? wordsInDescription.slice(0, 10).join(" ") + "..."
				: video["description"];

		return (
			<div className="rounded-lg overflow-hidden w-7xl h-54 flex flex-col object-contain System-background-blue">
				<div className="p-4">
					<p className="whitespace-normal">
						{showFullDescription
							? video["description"]
							: truncatedDescription}
						{wordsInDescription.length > 10 && (
							<button
								className="text-blue-500 underline p-2"
								onClick={toggleDescription}>
								{showFullDescription ? "Show Less" : " More"}
							</button>
						)}
					</p>
				</div>
			</div>
		);
	}

	const cameraOn = () => {
		navigator.mediaDevices
			.getUserMedia({ video: true })
			.then((stream) => {
				const videoElement = document.querySelector(".camera-stream");
				if (videoElement) {
					videoElement.srcObject = stream;
				}
			})
			.catch((error) => {
				console.error("Error accessing camera:", error);
			});
	};

	const [commentMessage, setCommentMessage] = useState("");
	const [commentAmount, setCommentAmount] = useState(0);

	const onMessageUpdate = (event) => {
		setCommentMessage(event.target.value);
	};

	const onAmountUpdate = (event) => {
		setCommentAmount(event.target.value);
	};

	const handleMessageSubmit = async () => {
		// console.log(, commentMessage)
		if (ethWallet?.signer) {
			getAtomic(ethWallet.signer).addComment(
				router.query.id,
				commentMessage,
				{ value: ethers.parseEther(commentAmount.toString()) }
			);
		}
		setCommentMessage("");
		setCommentAmount(0);
	};
	return (
		<>
			<div className="VStack w-full">
				<div className="w-full">
					<video
						className=" w-full h-[640px] object-contain bg-stone-900"
						src={video["src"]}
						controls={true}
						autoPlay={true}></video>
				</div>
				<div className="HStack justify-between mt-2 mb-2 items-start">
					<div className="VStack">
						<p className="Title text-xl">{video["title"]}</p>
					</div>
					<div className="HStack gap-2 pr-2">
						<div className="HStack items-center cursor-pointer System-background-ocean-blue Circle">
							<div
								className="HStack items-center hover:brightness-125 cursor-pointer gap-2 text-white System-background-ocean-blue pl-4 pr-4 Circle"
								onClick={toggleLike}>
								<p className="p-2">
									<BiSolidLike
										className={` ${
											isLiked
												? "text-red-500"
												: "text-white"
										}`}
									/>
								</p>
								<p
									className={` ${
										isLiked ? "text-red-500" : "text-white"
									}`}>
									{" "}
									{likeCount}
								</p>
							</div>

							<div
								className="HStack items-center hover:brightness-125 cursor-pointer gap-2 text-white System-background-ocean-blue pl-4 pr-4 Circle"
								onClick={toggleDislike}>
								<p className="p-2">
									<BiSolidDislike
										className={` ${
											isDisliked
												? "text-red-500"
												: "text-white"
										}`}
									/>
								</p>
								<p
									className={` ${
										isDisliked
											? "text-red-500"
											: "text-white"
									}`}>
									{" "}
									{dislikeCount}
								</p>
							</div>
						</div>

						<div
							className="HStack items-center hover:brightness-125 cursor-pointer gap-2 text-white System-background-ocean-blue pl-4 pr-4 Circle"
							onClick={() => fork(video["title"])}>
							<p className="p-2">
								<CgGitFork
									className={` ${
										isFork ? "text-red-500" : "text-white"
									}`}
								/>
							</p>
							<p
								className={` ${
									isFork ? "text-red-500" : "text-white"
								}`}>
								{" "}
								{forkCount}
							</p>
						</div>
					</div>
				</div>
				<div className="VStack gap-4">
					<div> {displayVideoDetails(video)}</div>
					<div className="HStack">
						<img
							src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
							className="w-10 h-10"
							alt=""
						/>
						<div className="VStack px-2">
							<Link href={`/profile/${video["owner"]}`}>
								{video["owner"]}
							</Link>
							<p>128k follower</p>
						</div>
						<button className="Button-primary px-4 rounded-full my-1">
							Follow
						</button>
					</div>
					<div className="HStack gap-36 overflow-x-auto max-w-full">
						{displayVideoList(videos)}
					</div>

					<div className="VStack gap-4">
						<div className="HStack gap-4">
							<p className="Title">Comments </p>
							<p>{comments.length}</p>
							<p>times</p>
						</div>
						{signedIn ? (
							<>
								<div className="VStack w-full gap-8">
									<div className="HStack gap-4">
										<label>Donation Amount</label>
										<input
											type="number"
											min={0}
											max={10000}
											value={commentAmount}
											onChange={onAmountUpdate}></input>
									</div>
									<div className="HStack gap-4">
										<img
											src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
											className="w-10 h-10"
											alt=""
										/>
										<textarea
											name=""
											className="System-background-blue rounded-md w-full"
											id=""
											cols={15}
											rows={3}
											placeholder="Comment here bro!"
											value={commentMessage}
											onChange={onMessageUpdate}
										/>
										<button
											className="Button-primary"
											onClick={handleMessageSubmit}>
											Post
										</button>
									</div>
								</div>
							</>
						) : (
							<></>
						)}
						<div className="VStack">
							{comments.length > 0 && (
								<>
									{comments.map(
										(comment: CommentCardProp) => {
											return (
												// eslint-disable-next-line react/jsx-key
												<Comment
													name={comment.poster}
													profilePic={
														comment.profilePic
													}
													comment={comment.message}
													amount={comment.amount}
												/>
											);
										}
									)}
								</>
							)}
						</div>
					</div>
				</div>
			</div>
		</>
	);
};
PlayPage.getLayout = useDefaultLayout;

export default PlayPage;
