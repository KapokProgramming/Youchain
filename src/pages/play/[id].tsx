import { useDefaultLayout } from "@/hooks/useLayout";
import type { NextPageWithLayout } from "@/utils/types";
import { BiSolidLike } from "react-icons/bi";
import { BiSolidDislike } from "react-icons/bi";
import { CgGitFork } from "react-icons/cg";
import { useState } from "react";
import Router, { useRouter } from "next/router";
import { ComponentWrapperPage } from "@/components/ComponentWrapperPage";
import { useBosComponents } from "@/hooks/useBosComponents";
import { useAuthStore } from "@/stores/auth";

const PlayPage: NextPageWithLayout = () => {
  function commentLayout(id: number) {
    const details = [];
    const target = videoes[id];
    if (target.comment!.length < 1) return details;
    for (let i = 0; i < target.comment.length; i++) {
      details.push(
        <div className="VStack">
          <div className="HStack">
            <div>users' profile</div>
            <div className="VStack">
              <p> {target.comment[i].user}</p>
              <p> {target.comment[i].comment}</p>
            </div>
          </div>
        </div>
      );
    }
    return details;
  }
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
    const details = [];
    const target = videoes[id];
    if (target.comment!.length < 1) return details;
    for (let i = 0; i < target.comment.length; i++) {
      details.push(
        <div className="VStack">
          <div className="HStack">
            <div>users' profile</div>
            <div className="VStack">
              <p> {target.comment[i].user}</p>
              <p> {target.comment[i].comment}</p>
            </div>
          </div>
        </div>
      );
    }
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

  const videoes = [
    {
      id: "1",
      timestamp: 1702882062,
      title: "Test 20 yr",
      description:
        " test123 test123 test123 test123 test123 test123 test123 test123 test123 test123 test123 test123 test123 test123 test123 test123 test123 test123 test123",
      owner: "kan_k.near",
      src: "https://youtu.be/pC3dIPpC7JI?si=ERfG4HufLQkyY_j_",
      thumbnail:
        "https://ipfs.near.social/ipfs/bafkreielwwffvkzqquv4gt7n35m47dht53v4sowvy3hyukj4arv4oaymni",
      comment: [
        {
          user: "Kant",
          comment: "HEllo caht good",
        },
        {
          user: "Yo",
          comment: "Aawdawd caht good",
        },
        {
          user: "Top ten",
          comment: "Love it bro! ",
        },
      ],
    },
    {
      id: "2",
      timestamp: 1702882062,
      title: "Test 20 yr",
      description: "test123",
      owner: "kan_k.near",
      src: "https://youtu.be/pC3dIPpC7JI?si=ERfG4HufLQkyY_j_",
      thumbnail:
        "https://ipfs.near.social/ipfs/bafkreielwwffvkzqquv4gt7n35m47dht53v4sowvy3hyukj4arv4oaymni",
    },
    {
      id: "2",
      timestamp: 1702882062,
      title: "Test 20 yr",
      description: "test123",
      owner: "kan_k.near",
      src: "https://youtu.be/pC3dIPpC7JI?si=ERfG4HufLQkyY_j_",
      thumbnail:
        "https://ipfs.near.social/ipfs/bafkreielwwffvkzqquv4gt7n35m47dht53v4sowvy3hyukj4arv4oaymni",
    },
  ];
  const components = useBosComponents();

  const [showFullDescription, setShowFullDescription] = useState(false);

  function toggleDescription() {
    setShowFullDescription(!showFullDescription);
  }

  function displayVideoList(detail: any) {
    const details = [];
    for (let i = 0; i < videoes.length; i++) {
      details.push(
        <ComponentWrapperPage
          src={components.videoCard}
          componentProps={videoes[i]}
        />
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
      <div className="VStack w-full">
        <div className="w-full">
          <video
            className=" w-full"
            src="https://firebasestorage.googleapis.com/v0/b/fileuploader-7c008.appspot.com/o/uploads%2F1702735616725-RE.mp4?alt=media&token=82c62600-7ee4-47fd-93dc-21d94bbd312b"
            controls={true}
          ></video>
        </div>
        <div className="HStack justify-between mt-2 mb-2 items-start">
          <div className="VStack">
            <p className="Title text-xl">{videoes[0].title}</p>

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
              onClick={() => fork(videoes[0].title)}
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
          <div> {displayVideoDetails(videoes[0])}</div>
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
          <div className="HStack gap-36 overflow-x-auto max-w-full">
  {displayVideoList(videoes)}
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
                    <button className="hover:Circle pr-4 pl-4 pt-2 pb-2 Circle Button-primary">
                      8 kub
                    </button>
                    <button className="hover:Circle pr-4 pl-4 pt-2 pb-2 Circle Button-primary">
                      16 kub
                    </button>
                    <button className="hover:Circle pr-4 pl-4 pt-2 pb-2 Circle Button-primary">
                      32 kub
                    </button>
                    <button className="hover:Circle pr-4 pl-4 pt-2 pb-2 Circle Button-primary">
                      64 kub
                    </button>
                    <button className="hover:Circle pr-4 pl-4 pt-2 pb-2 Circle Button-primary">
                      128 kub
                    </button>
                    <button className="hover:Circle pr-4 pl-4 pt-2 pb-2 Circle Button-primary">
                      256 kub
                    </button>
                    <button className="hover:Circle pr-4 pl-4 pt-2 pb-2 Circle Button-primary">
                      512 kub
                    </button>
                    <button className="hover:Circle pr-4 pl-4 pt-2 pb-2 Circle Button-primary">
                      1024 kub
                    </button>{" "}
                    <button className="hover:Circle pr-4 pl-4 pt-2 pb-2 Circle Button-primary">
                      100 kub
                    </button>
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
                    ></textarea>
                    <button className="Button-primary">Post</button>
                  </div>
                </div>
              </>
            ) : (
              <></>
            )}

            <div className="VStack">{commentLayout(0)}</div>
          </div>
        </div>
      </div>
    </>
  );
};
PlayPage.getLayout = useDefaultLayout;

export default PlayPage;
