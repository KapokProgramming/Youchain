import { ComponentWrapperPage } from "@/components/ComponentWrapperPage";
import { useBosComponents } from "@/hooks/useBosComponents";
import { useDefaultLayout } from "@/hooks/useLayout";
import { useAuthStore } from "@/stores/auth";
import type { NextPageWithLayout } from "@/utils/types";
import { useRouter } from "next/router";

const ProfilePage: NextPageWithLayout = () => {
  const components = useBosComponents();
  const router = useRouter()
  const profile_id = router.query.id
  // const accountId = useAuthStore((store) => store.accountId);

  const AccDetails = {
    name: "Elon Musk",
    subscribers: "10,000,000",
    profilePic:
      "https://th.bing.com/th/id/R.cc580032c51804526c6e1e2288119f25?rik=wjntycSgOd0Meg&pid=ImgRaw&r=0",
    videos: [
      {
        name: "영화 'Wonka'(2023) 예고편(trailer)으로 영어 공부하기",
        date: "4 days ago",
        channelName: "Yo Hippy",
        thumbnail:
          "https://i.pinimg.com/originals/56/f0/c7/56f0c7de57fdae6d0a9ddc43448b6dff.png",
        url: "https://www.youtube.com/embed/wYmtRhKvmVE?si=wVWcqX8E2fXe_ZEk",
      },
      {
        name: "Wonka (2023)",
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
        name: "Wonka (2023)",
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
        name: "Wonka (2023)",
        date: "4 days ago",
        channelName: "Yo Hippy",
        thumbnail:
          "https://i.pinimg.com/originals/56/f0/c7/56f0c7de57fdae6d0a9ddc43448b6dff.png",
        url: "https://www.youtube.com/embed/wYmtRhKvmVE?si=wVWcqX8E2fXe_ZEk",
      },
    ],
  };
  function displayVideoDetails(detail: any) {
    const details = [];
    for (let i = 0; i < AccDetails.videos.length; i++) {
      details.push(
        <div className=" rounded-lg overflow-hidden w-full h-54 flex flex-col object-contain bg-gray-200 hover:bg-gray-500">
          <iframe
            src={AccDetails.videos[i].url}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          />
          <p className="text-black w-full pl-2 whitespace-nowrap mt-2">
            {AccDetails.videos[i].name}
          </p>
          <div className="pl-2"> {AccDetails.videos[i].date}</div>
        </div>
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
        <ComponentWrapperPage src={components.profileBanner} componentProps={ {accountId:profile_id} } />
      </div>
      <div className="w-full h-full mt-2">
        <div className="flex flex-row w-full h-full mt-4">
          <p className="text-black font-bold text-4xl ml-6 mt-6 ">
            Videos
          </p>
          <div className=" w-5/6 h-5/6 text-lg">
            <div className="grid grid-cols-4 h-full w-full mt-20 ml-32 gap-4">
              {displayVideoDetails(AccDetails)}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

ProfilePage.getLayout = useDefaultLayout;

export default ProfilePage;
