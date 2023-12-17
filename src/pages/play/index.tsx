import { useDefaultLayout } from "@/hooks/useLayout";
import type { NextPageWithLayout } from "@/utils/types";
import { BiSolidLike } from "react-icons/bi";
import { BiSolidDislike } from "react-icons/bi";
import { CgGitFork } from "react-icons/cg";
import { useState } from "react";
import Router, { useRouter } from "next/router";
import { useAuthStore } from "@/stores/auth";

const PlayPage: NextPageWithLayout = () => {
  const signedIn = useAuthStore((store) => store.signedIn);
  const accountId = useAuthStore((store) => store.accountId);
  const [likeCount, setLikeCount] = useState(128);
  const [dislikeCount, setDislikeCount] = useState(12);
  const [isLiked, setIsLiked] = useState(false);
  const [isDisliked, setIsDisliked] = useState(false);
  const [forkCount, setForkCount] = useState(3);
  const [commentCount, setcommentCount] = useState(3);

  const [isFork, setIsFork] = useState(false);
  const router = useRouter();

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
  const AccDetails = {
    name: "Elon Musk",
    subscribers: "10,000,000",
    videos: [
      {
        name: "영화 'Wonka'(2023) 예고편(trailer)으로 영어 공부하기",
        date: "4 days ago",
        channelName: "Yo Hippy",
        thumbnail:
          "https://i.pinimg.com/originals/56/f0/c7/56f0c7de57fdae6d0a9ddc43448b6dff.png",
        url: "https://www.youtube.com/embed/wYmtRhKvmVE?si=wVWcqX8E2fXe_ZEk",
        comment: ["dwadawdawdawdw", "awdawdad3qee23e2"],
      },
      {
        name: "Wonka (2023)",
        date: "4 days ago",
        channelName: "Yo Hippy",
        thumbnail:
          "https://i.pinimg.com/originals/56/f0/c7/56f0c7de57fdae6d0a9ddc43448b6dff.png",
        url: "https://www.youtube.com/embed/wYmtRhKvmVE?si=wVWcqX8E2fXe_ZEk",
        comment: ["dwadawdawdawdw", "awdawdad3qee23e2"],
      },
      {
        name: "영화 'Wonka'(2023) 예고편(trailer)으로 영어 공부하기",
        date: "4 days ago",
        channelName: "Yo Hippy",
        thumbnail:
          "https://i.pinimg.com/originals/56/f0/c7/56f0c7de57fdae6d0a9ddc43448b6dff.png",
        url: "https://www.youtube.com/embed/wYmtRhKvmVE?si=wVWcqX8E2fXe_ZEk",
        comment: ["dwadawdawdawdw", "awdawdad3qee23e2"],
      },
      {
        name: "영화 'Wonka'(2023) 예고편(trailer)으로 영어 공부하기",
        date: "4 days ago",
        channelName: "Yo Hippy",
        thumbnail:
          "https://i.pinimg.com/originals/56/f0/c7/56f0c7de57fdae6d0a9ddc43448b6dff.png",
        url: "https://www.youtube.com/embed/wYmtRhKvmVE?si=wVWcqX8E2fXe_ZEk",
        comment: ["dwadawdawdawdw", "awdawdad3qee23e2"],
      },
      {
        name: "영화 'Wonka'(2023) 예고편(trailer)으로 영어 공부하기",
        date: "4 days ago",
        channelName: "Yo Hippy",
        thumbnail:
          "https://i.pinimg.com/originals/56/f0/c7/56f0c7de57fdae6d0a9ddc43448b6dff.png",
        url: "https://www.youtube.com/embed/wYmtRhKvmVE?si=wVWcqX8E2fXe_ZEk",
        comment: ["dwadawdawdawdw", "awdawdad3qee23e2"],
      },
      {
        name: "영화 'Wonka'(2023) 예고편(trailer)으로 영어 공부하기",
        date: "4 days ago",
        channelName: "Yo Hippy",
        thumbnail:
          "https://i.pinimg.com/originals/56/f0/c7/56f0c7de57fdae6d0a9ddc43448b6dff.png",
        url: "https://www.youtube.com/embed/wYmtRhKvmVE?si=wVWcqX8E2fXe_ZEk",
      },
      {
        name: "영화 'Wonka'(2023) 예고편(trailer)으로 영어 공부하기",
        date: "4 days ago",
        channelName: "Yo Hippy",
        thumbnail:
          "https://i.pinimg.com/originals/56/f0/c7/56f0c7de57fdae6d0a9ddc43448b6dff.png",
        url: "https://www.youtube.com/embed/wYmtRhKvmVE?si=wVWcqX8E2fXe_ZEk",
      },
      {
        name: "영화 'Wonka'(2023) 예고편(trailer)으로 영어 공부하기",
        date: "4 days ago",
        channelName: "Yo Hippy",
        thumbnail:
          "https://i.pinimg.com/originals/56/f0/c7/56f0c7de57fdae6d0a9ddc43448b6dff.png",
        url: "https://www.youtube.com/embed/wYmtRhKvmVE?si=wVWcqX8E2fXe_ZEk",
      },
      {
        name: "영화 'Wonka'(2023) 예고편(trailer)으로 영어 공부하기",
        date: "4 days ago",
        channelName: "Yo Hippy",
        thumbnail:
          "https://i.pinimg.com/originals/56/f0/c7/56f0c7de57fdae6d0a9ddc43448b6dff.png",
        url: "https://www.youtube.com/embed/wYmtRhKvmVE?si=wVWcqX8E2fXe_ZEk",
      },
      {
        name: "영화 'Wonka'(2023) 예고편(trailer)으로 영어 공부하기",
        date: "4 days ago",
        channelName: "Yo Hippy",
        thumbnail:
          "https://i.pinimg.com/originals/56/f0/c7/56f0c7de57fdae6d0a9ddc43448b6dff.png",
        url: "https://www.youtube.com/embed/wYmtRhKvmVE?si=wVWcqX8E2fXe_ZEk",
      },
      {
        name: "영화 'Wonka'(2023) 예고편(trailer)으로 영어 공부하기",
        date: "4 days ago",
        channelName: "Yo Hippy",
        thumbnail:
          "https://i.pinimg.com/originals/56/f0/c7/56f0c7de57fdae6d0a9ddc43448b6dff.png",
        url: "https://www.youtube.com/embed/wYmtRhKvmVE?si=wVWcqX8E2fXe_ZEk",
      },
    ],
  };
  const videos = [
    {
      id: 10,
      name: "영화 'Wonka'(2023) 예고편(trailer)으로 영어 공부하기",
      date: "4 days ago",
      channelName: "Yo Hippy",
      description:
        "     Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt voluptas nulla quibusdam quisquam reiciendis beatae adipisci aperiam quas cupiditate autem modi, fuga aspernatur magnam non commodi minus cum excepturi sequi rem eius soluta. Ipsam fuga voluptatibus, sed illum quos beatae autem odio obcaecati. Cumque perspiciatis ducimus aliquam voluptates itaque iure temporibus praesentium corrupti deleniti, culpa suscipit ex magni vero asperiores provident architecto nemo repudiandae! Aperiam suscipit, nam explicabo eveniet unde, cum tempora ducimus neque libero et at perferendis voluptas. Deleniti doloremque architecto, dicta esse necessitatibus officia quibusdam recusandae distinctio, nihil aliquam illo in. Accusamus magnam nihil praesentium quas quam. Aliquam.        ",
      thumbnail:
        "https://i.pinimg.com/originals/56/f0/c7/56f0c7de57fdae6d0a9ddc43448b6dff.png",
      url: "https://www.youtube.com/embed/wYmtRhKvmVE?si=wVWcqX8E2fXe_ZEk",
      comment: ["dwadawdawdawdw", "awdawdad3qee23e2"],
    },
    {
      name: "Wonka (2023)",
      date: "4 days ago",
      channelName: "Yo Hippy",
      description:
        "     Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt voluptas nulla quibusdam quisquam reiciendis beatae adipisci aperiam quas cupiditate autem modi, fuga aspernatur magnam non commodi minus cum excepturi sequi rem eius soluta. Ipsam fuga voluptatibus, sed illum quos beatae autem odio obcaecati. Cumque perspiciatis ducimus aliquam voluptates itaque iure temporibus praesentium corrupti deleniti, culpa suscipit ex magni vero asperiores provident architecto nemo repudiandae! Aperiam suscipit, nam explicabo eveniet unde, cum tempora ducimus neque libero et at perferendis voluptas. Deleniti doloremque architecto, dicta esse necessitatibus officia quibusdam recusandae distinctio, nihil aliquam illo in. Accusamus magnam nihil praesentium quas quam. Aliquam.        ",

      thumbnail:
        "https://i.pinimg.com/originals/56/f0/c7/56f0c7de57fdae6d0a9ddc43448b6dff.png",
      url: "https://www.youtube.com/embed/wYmtRhKvmVE?si=wVWcqX8E2fXe_ZEk",
    },
    {
      name: "영화 'Wonka'(2023) 예고편(trailer)으로 영어 공부하기",
      date: "4 days ago",
      channelName: "Yo Hippy",
      description:
        "     Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt voluptas nulla quibusdam quisquam reiciendis beatae adipisci aperiam quas cupiditate autem modi, fuga aspernatur magnam non commodi minus cum excepturi sequi rem eius soluta. Ipsam fuga voluptatibus, sed illum quos beatae autem odio obcaecati. Cumque perspiciatis ducimus aliquam voluptates itaque iure temporibus praesentium corrupti deleniti, culpa suscipit ex magni vero asperiores provident architecto nemo repudiandae! Aperiam suscipit, nam explicabo eveniet unde, cum tempora ducimus neque libero et at perferendis voluptas. Deleniti doloremque architecto, dicta esse necessitatibus officia quibusdam recusandae distinctio, nihil aliquam illo in. Accusamus magnam nihil praesentium quas quam. Aliquam.        ",

      thumbnail:
        "https://i.pinimg.com/originals/56/f0/c7/56f0c7de57fdae6d0a9ddc43448b6dff.png",
      url: "https://www.youtube.com/embed/wYmtRhKvmVE?si=wVWcqX8E2fXe_ZEk",
    },
    {
      name: "Wonka (2023)",
      date: "4 days ago",
      channelName: "Yo Hippy",
      description:
        "     Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt voluptas nulla quibusdam quisquam reiciendis beatae adipisci aperiam quas cupiditate autem modi, fuga aspernatur magnam non commodi minus cum excepturi sequi rem eius soluta. Ipsam fuga voluptatibus, sed illum quos beatae autem odio obcaecati. Cumque perspiciatis ducimus aliquam voluptates itaque iure temporibus praesentium corrupti deleniti, culpa suscipit ex magni vero asperiores provident architecto nemo repudiandae! Aperiam suscipit, nam explicabo eveniet unde, cum tempora ducimus neque libero et at perferendis voluptas. Deleniti doloremque architecto, dicta esse necessitatibus officia quibusdam recusandae distinctio, nihil aliquam illo in. Accusamus magnam nihil praesentium quas quam. Aliquam.        ",

      thumbnail:
        "https://i.pinimg.com/originals/56/f0/c7/56f0c7de57fdae6d0a9ddc43448b6dff.png",
      url: "https://www.youtube.com/embed/wYmtRhKvmVE?si=wVWcqX8E2fXe_ZEk",
    },
    {
      name: "영화 'Wonka'(2023) 예고편(trailer)으로 영어 공부하기",
      date: "4 days ago",
      channelName: "Yo Hippy",
      description:
        "     Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt voluptas nulla quibusdam quisquam reiciendis beatae adipisci aperiam quas cupiditate autem modi, fuga aspernatur magnam non commodi minus cum excepturi sequi rem eius soluta. Ipsam fuga voluptatibus, sed illum quos beatae autem odio obcaecati. Cumque perspiciatis ducimus aliquam voluptates itaque iure temporibus praesentium corrupti deleniti, culpa suscipit ex magni vero asperiores provident architecto nemo repudiandae! Aperiam suscipit, nam explicabo eveniet unde, cum tempora ducimus neque libero et at perferendis voluptas. Deleniti doloremque architecto, dicta esse necessitatibus officia quibusdam recusandae distinctio, nihil aliquam illo in. Accusamus magnam nihil praesentium quas quam. Aliquam.        ",

      thumbnail:
        "https://i.pinimg.com/originals/56/f0/c7/56f0c7de57fdae6d0a9ddc43448b6dff.png",
      url: "https://www.youtube.com/embed/wYmtRhKvmVE?si=wVWcqX8E2fXe_ZEk",
    },
    {
      name: "Wonka (2023)",
      date: "4 days ago",
      channelName: "Yo Hippy",
      description:
        "     Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt voluptas nulla quibusdam quisquam reiciendis beatae adipisci aperiam quas cupiditate autem modi, fuga aspernatur magnam non commodi minus cum excepturi sequi rem eius soluta. Ipsam fuga voluptatibus, sed illum quos beatae autem odio obcaecati. Cumque perspiciatis ducimus aliquam voluptates itaque iure temporibus praesentium corrupti deleniti, culpa suscipit ex magni vero asperiores provident architecto nemo repudiandae! Aperiam suscipit, nam explicabo eveniet unde, cum tempora ducimus neque libero et at perferendis voluptas. Deleniti doloremque architecto, dicta esse necessitatibus officia quibusdam recusandae distinctio, nihil aliquam illo in. Accusamus magnam nihil praesentium quas quam. Aliquam.        ",

      thumbnail:
        "https://i.pinimg.com/originals/56/f0/c7/56f0c7de57fdae6d0a9ddc43448b6dff.png",
      url: "https://www.youtube.com/embed/wYmtRhKvmVE?si=wVWcqX8E2fXe_ZEk",
    },
  ];
  const [showFullDescription, setShowFullDescription] = useState(false);

  function toggleDescription() {
    setShowFullDescription(!showFullDescription);
  }

  function displayVideoList(detail: any) {
    const details = [];
    for (let i = 0; i < AccDetails.videos.length; i++) {
      details.push(
        <div className=" rounded-md video bg-gray-200 hover:bg-gray-500">
          <iframe
            src={AccDetails.videos[i].url}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            className="w-full h-40 rounded-md"
          />
          <p className="text-black w-full pl-2 whitespace-nowrap mt-2 overflow-hidden">
            {AccDetails.videos[i].name}
          </p>
          <div className="pl-2 video-width"> {AccDetails.videos[i].date}</div>
        </div>
      );
    }
    return details;
  }
  function displayVideoDetails(video: any) {
    const wordsInDescription = video.description.split(/\s+/);
    const truncatedDescription =
      wordsInDescription.length > 10
        ? wordsInDescription.slice(0, 10).join(" ") + "..."
        : video.description;

    return (
      <div className="rounded-lg overflow-hidden w-7xl h-54 flex flex-col object-contain System-background-blue">
        <div className="pl-2">
          <p className="whitespace-normal">
            {showFullDescription ? video.description : truncatedDescription}
            {wordsInDescription.length > 10 && (
              <button
                className="text-blue-500 underline p-2"
                onClick={toggleDescription}
              >
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

  return (
    <>
      <div className="VStack w-full bg-white Sub-title">
        <div className="w-full">
          <video
            className=" w-full"
            src="https://firebasestorage.googleapis.com/v0/b/fileuploader-7c008.appspot.com/o/uploads%2F1702735616725-RE.mp4?alt=media&token=82c62600-7ee4-47fd-93dc-21d94bbd312b"
            controls={true}
          ></video>
        </div>
        <div className="HStack justify-between mt-2 mb-2 items-start">
          <div className="VStack">
            <p className="Title text-xl">{videos[0].name}</p>

            <div className="HStack">12,234,123 views</div>
          </div>
          <div className="HStack gap-2 pr-2">
            <div className="HStack items-center cursor-pointer System-background-ocean-blue Circle">
              <div
                className="HStack items-center hover:brightness-125 cursor-pointer gap-2 text-white System-background-ocean-blue pl-4 pr-4 Circle"
                onClick={toggleLike}
              >
                <p className="p-2">
                  <BiSolidLike
                    className={` ${isLiked ? "text-red-500" : "text-white"}`}
                  />
                </p>
                <p className={` ${isLiked ? "text-red-500" : "text-white"}`}>
                  {" "}
                  {likeCount}
                </p>
              </div>

              <div
                className="HStack items-center hover:brightness-125 cursor-pointer gap-2 text-white System-background-ocean-blue pl-4 pr-4 Circle"
                onClick={toggleDislike}
              >
                <p className="p-2">
                  <BiSolidDislike
                    className={` ${isDisliked ? "text-red-500" : "text-white"}`}
                  />
                </p>
                <p className={` ${isDisliked ? "text-red-500" : "text-white"}`}>
                  {" "}
                  {dislikeCount}
                </p>
              </div>
            </div>

            <div
              className="HStack items-center hover:brightness-125 cursor-pointer gap-2 text-white System-background-ocean-blue pl-4 pr-4 Circle"
              onClick={() => fork(Number(videos[0].id).toString())}
            >
              <p className="p-2">
                <CgGitFork
                  className={` ${isFork ? "text-red-500" : "text-white"}`}
                />
              </p>
              <p className={` ${isFork ? "text-red-500" : "text-white"}`}>
                {" "}
                {forkCount}
              </p>
            </div>
          </div>
        </div>
        <div className="VStack gap-4">
          <div> {displayVideoDetails(videos[0])}</div>
          <div className="HStack">
            <img
              src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
              className="w-10 h-10"
              alt=""
            />
            <div className="VStack">
              <p>Yo HippyScience</p>
              <p>128k follower</p>
            </div>
            <button className="Button-primary pl-4 pr-4 Circle">Follow</button>
          </div>
          <div className="VStack System-background-blue p-4 rounded-lg">
            <p className="mb-4 font-medium Title">Suggestion</p>
            <div
              className="overflow-y-scroll gap-4 HStack "
              style={{
                WebkitOverflowScrolling: "touch",
                scrollbarWidth: "thin",
                scrollbarColor: "transparent transparent",
              }}
            >
              {displayVideoList(AccDetails)}
            </div>
          </div>

          <div className="VStack gap-4">
            <div className="HStack gap-4">
              <p className="Title">Comments </p>
              <p>{commentCount}</p>
              <p>times</p>
            </div>
            {signedIn ? (
              <>
                
                <div className="VStack w-full gap-8">
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
                    ></textarea>
                  </div>
                  <div className="HStack">
                    <img
                      src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
                      className="w-10 h-10"
                      alt=""
                    />
                    <div className="VStack">
                      <p>Yoza555</p>
                      <p>{videos[0].comment[0]}</p>
                    </div>
                  </div>
                </div>
              </>
            ) : (
              <>
                <div className="HStack">
                  <img
                    src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
                    className="w-10 h-10"
                    alt=""
                  />
                  <div className="VStack">
                    <p>Yoza555</p>
                    <p>{videos[0].comment[0]}</p>
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

PlayPage.getLayout = useDefaultLayout;

export default PlayPage;
