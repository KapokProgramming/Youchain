import { useDefaultLayout } from "@/hooks/useLayout";
import type { NextPageWithLayout } from "@/utils/types";
import { Playlist } from "@/components/lib/Playlist/index";
const SubscriptionPage: NextPageWithLayout = () => {
  return (
    <>
      <div className="text-black">
        <div className="HStack  gap-4">
          <iframe
            width="300px"
            height="165px"
            className="rounded-lg"
            src="https://www.youtube.com/embed/wYmtRhKvmVE?si=wVWcqX8E2fXe_ZEk"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          ></iframe>{" "}
          <div className="VStack justify-between">
            <div className="">
              <p className=" font-medium text-lg">
                영화 'Wonka'(2023) 예고편(trailer)으로 영어 공부하기
              </p>
              <p className="Grey">4 days ago</p>
              <div className="HStack items-center gap-2 mt-4">
                <img 
                className="h-10 w-10"
                src="https://i.pinimg.com/originals/56/f0/c7/56f0c7de57fdae6d0a9ddc43448b6dff.png" alt="owner" />
                <p>Yo Hippy</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
SubscriptionPage.getLayout = useDefaultLayout;

export default SubscriptionPage;
