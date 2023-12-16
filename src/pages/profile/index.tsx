import { useDefaultLayout } from "@/hooks/useLayout";
import type { NextPageWithLayout } from "@/utils/types";

const ProfilePage: NextPageWithLayout = () => {
  const AccDetails = [
    {
      name: "Elon Musk",
      subscribers: "10,000,000",
      profilePic:
        "https://th.bing.com/th/id/R.cc580032c51804526c6e1e2288119f25?rik=wjntycSgOd0Meg&pid=ImgRaw&r=0",
      date: "4 days ago",
      url: "https://www.youtube.com/embed/wYmtRhKvmVE?si=wVWcqX8E2fXe_ZEk",
    },
    {
        name: "Elon Musk",
        subscribers: "10,000,000",
        profilePic:
          "https://th.bing.com/th/id/R.cc580032c51804526c6e1e2288119f25?rik=wjntycSgOd0Meg&pid=ImgRaw&r=0",
        date: "4 days ago",
        url: "https://www.youtube.com/embed/wYmtRhKvmVE?si=wVWcqX8E2fXe_ZEk",
      },
      {
        name: "Elon Musk",
        subscribers: "10,000,000",
        profilePic:
          "https://th.bing.com/th/id/R.cc580032c51804526c6e1e2288119f25?rik=wjntycSgOd0Meg&pid=ImgRaw&r=0",
        date: "4 days ago",
        url: "https://www.youtube.com/embed/wYmtRhKvmVE?si=wVWcqX8E2fXe_ZEk",
      },
      {
        name: "Elon Musk",
        subscribers: "10,000,000",
        profilePic:
          "https://th.bing.com/th/id/R.cc580032c51804526c6e1e2288119f25?rik=wjntycSgOd0Meg&pid=ImgRaw&r=0",
        date: "4 days ago",
        url: "https://www.youtube.com/embed/wYmtRhKvmVE?si=wVWcqX8E2fXe_ZEk",
      },
      {
        name: "Elon Musk",
        subscribers: "10,000,000",
        profilePic:
          "https://th.bing.com/th/id/R.cc580032c51804526c6e1e2288119f25?rik=wjntycSgOd0Meg&pid=ImgRaw&r=0",
        date: "4 days ago",
        url: "https://www.youtube.com/embed/wYmtRhKvmVE?si=wVWcqX8E2fXe_ZEk",
      },
      {
        name: "Elon Musk",
        subscribers: "10,000,000",
        profilePic:
          "https://th.bing.com/th/id/R.cc580032c51804526c6e1e2288119f25?rik=wjntycSgOd0Meg&pid=ImgRaw&r=0",
        date: "4 days ago",
        url: "https://www.youtube.com/embed/wYmtRhKvmVE?si=wVWcqX8E2fXe_ZEk",
      },
      {
        name: "Elon Musk",
        subscribers: "10,000,000",
        profilePic:
          "https://th.bing.com/th/id/R.cc580032c51804526c6e1e2288119f25?rik=wjntycSgOd0Meg&pid=ImgRaw&r=0",
        date: "4 days ago",
        url: "https://www.youtube.com/embed/wYmtRhKvmVE?si=wVWcqX8E2fXe_ZEk",
      },
  ];

  function displayVideoDetails(detail: any) {
    const details = [];
    for (let i = 0; i < AccDetails.length; i++) {
      details.push(
          <div className=" rounded-lg z-10 overflow-hidden w-full h-52 flex flex-col object-contain bg-gray-200 hover:bg-gray-500">
            <iframe
              src={AccDetails[i].url}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            />
            <p className="text-black w-full pl-2">{ AccDetails[i].name}</p>
            <div className="pl-2"> {AccDetails[i].date}</div>
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

      <div className="w-full h-2/6 fixed mt-24 border-b-2">
        <div className="flex flex-row w-full h-full">
          <img
            src={AccDetails[0].profilePic}
            className="w-60 h-60 rounded-full ml-6 mt-6 overflow-hidden object-cover"
          />

          <div className="flex flex-col ml-10 mt-24 w-2/4">
            <p className="text-black font-bold text-7xl">
              {AccDetails[0].name}
            </p>
            <p className="text-xl text-gray-400 flex ">
              {AccDetails[0].subscribers} subscribers
            </p>
          </div>

          <button className="w-32 h-12 bg-gray-500 rounded-md text-white font-bold ml-12 mt-32 hover:bg-blue-500 ">
            Edit Profile
          </button>

        </div>
      </div>

      <div className="w-full h-full mt-96 fixed">
        <div className="flex flex-row w-full h-full mt-4">
          <p className="text-black font-bold text-4xl ml-6 mt-6 fixed">
            Videos
          </p>
          <div className=" w-5/6 h-2/4 text-lg">
            <div className="grid grid-cols-5 h-full w-full mt-20 ml-28 gap-6">
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
