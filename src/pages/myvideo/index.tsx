import { useDefaultLayout } from "@/hooks/useLayout";
import type { NextPageWithLayout } from "@/utils/types";
import { Playlist } from "@/components/lib/Playlist/index";
import Link from "next/link";
const MyVideoPage: NextPageWithLayout = () => {
  const videoDetails = [
    {
      id: "123",
      name: "영화 'Wonka'(2023) 예고편(trailer)으로 영어 공부하기",
      date: "4 days ago",
      channelName: "Yo Hippy",
      thumbnail:
        "https://resizing.flixster.com/i7Txn-rTWv7B8aB5AYbe2IuLU6s=/ems.cHJkLWVtcy1hc3NldHMvbW92aWVzLzE0N2E1MDljLTNlZDEtNDIyMS1iZjgzLTJkMjU1NjRjNzEwMy5qcGc=",
      url: "https://www.youtube.com/embed/wYmtRhKvmVE?si=wVWcqX8E2fXe_ZEk",
    },
    {
      id: "124",
      name: "Wonka (2023)",
      date: "4 days ago",
      channelName: "Yo Hippy",
      thumbnail:
        "https://resizing.flixster.com/i7Txn-rTWv7B8aB5AYbe2IuLU6s=/ems.cHJkLWVtcy1hc3NldHMvbW92aWVzLzE0N2E1MDljLTNlZDEtNDIyMS1iZjgzLTJkMjU1NjRjNzEwMy5qcGc=",
      url: "https://www.youtube.com/embed/wYmtRhKvmVE?si=wVWcqX8E2fXe_ZEk",
    },
  ];

  function displayVideoDetails(detail: any) {
    const details = [];
    for (let i = 0; i < videoDetails.length; i++) {
      details.push(
        <div className="HStack Lable gap-2  hover:bg-gray-300 w-3/4 h-52">
          <Link href={`play/${detail[i].id}`}>
            <div className="HStack w-full">
              <div className="video">
                <img
                  className="rounded-lg w-full h-48 object-fill"
                  src={detail[i].thumbnail}
                  alt="thumbnail"
                />
              </div>
              <div className="VStack justify-between">
                <div className="">
                  <p className="Label font-medium text-lg">{detail[i].name}</p>
                  <p className="Grey">4 days ago</p>
                  <div className="HStack items-center gap-2 mt-4">
                    <img
                      className="h-10 w-10 rounded-full"
                      src={detail[i].thumbnail}
                      alt="owner"
                    />
                    <p> {detail[i].channelName} </p>
                  </div>
                </div>
              </div>
            </div>
          </Link>
        </div>
      );
    }
    return details;
  }

  return (
    <>
      <div className="Label ml-16 mt-10">{displayVideoDetails(videoDetails)}</div>
    </>
  );
};

MyVideoPage.getLayout = useDefaultLayout;

export default MyVideoPage;
