import { useDefaultLayout } from "@/hooks/useLayout";
import type { NextPageWithLayout } from "@/utils/types";
import { Playlist } from "@/components/lib/Playlist/index";
const MyVideoPage: NextPageWithLayout = () => {
  const videoDetails = [
    {
      name: "영화 'Wonka'(2023) 예고편(trailer)으로 영어 공부하기",
      date: "4 days ago",
      channelName: "Yo Hippy",
      thumbnail: "https://i.ytimg.com/vi/wYmtRhKvmVE/maxresdefault.jpg",
      url: "https://www.youtube.com/embed/wYmtRhKvmVE?si=wVWcqX8E2fXe_ZEk",
    },
    {
      name: "Wonka (2023)",
      date: "4 days ago",
      channelName: "Yo Hippy",
      thumbnail: "https://i.ytimg.com/vi/wYmtRhKvmVE/maxresdefault.jpg",
      url: "https://www.youtube.com/embed/wYmtRhKvmVE?si=wVWcqX8E2fXe_ZEk",
    },
  ];

  function displayVideoDetails(detail: any) {
    const details = []
    for (let i = 0; i < videoDetails.length; i++) {
      details.push( 
        <div className="HStack Lable gap-4 mb-4">
          <iframe
            width="300px"
            height="165px"
            className="rounded-lg "
            src= { detail[i].url }
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          ></iframe>{" "}
          <div className="VStack justify-between">
            <div className="">
              <p className="Label font-medium text-lg">
                { detail[i].name }
              </p>
              <p className="Grey">4 days ago</p>
              <div className="HStack items-center gap-2 mt-4">
                <img
                  className="h-10 w-10"
                  src= { detail[i].thumbnail }
                  alt="owner"
                />
                <p> { detail[i].channelName } </p>
              </div>
            </div>
          </div>
        </div>
      );
    }
    return details;
  }

  return (
    <>
      <div className="Label">
        { displayVideoDetails(videoDetails) }
      </div>
    </>
  );
};

MyVideoPage.getLayout = useDefaultLayout;

export default MyVideoPage;
