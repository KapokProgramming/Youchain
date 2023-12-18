import { ComponentWrapperPage } from "@/components/ComponentWrapperPage";
import { useBosComponents } from "@/hooks/useBosComponents";
import { useDefaultLayout } from "@/hooks/useLayout";
import type { NextPageWithLayout } from "@/utils/types";
import { count } from "console";
const HomePage: NextPageWithLayout = () => {
  const components = useBosComponents();

  const details = [
    {
      title: "Top 10 Best Places to Visit in the World",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Non quo nobis quia magni sequi excepturi rerum nihil, laudantium architecto eos!",
      date: "7 days ago",
      image:
        "https://images.unsplash.com/photo-1612837017391-8b9b6e4b9b0f?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dmlkZW9zJTIwdG8lMjB2aXZpdCUyMGluJTIwdGhlJTIwd29ybGR8ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80",
    },
  ];

  const ranking = [
    "twitter",
    "facebook",
    "instagram",
    "youtube",
    "tiktok",
    "snapchat",
    "linkedin",
    "pinterest",
    "reddit",
    "tumblr",
  ];

  function rankingComponent(items: any) {
    const storage = [];
    for (let i = 0; i < items.length; i++) {
      const isLast = i == items.length - 1;
      storage.push(
        <div className={`w-full h-12 flex flex-row p-6`}>
          <div className={`w-full h-12 pt-2 justify-between flex flex-row rounded-sm border-b-2 cursor-pointer hover:bg-gray-500 hover:brightness-125 ${isLast ? 'border-b-0 ' : ''}`}>
            <p className="text-lg font-bold text-white ml-6 pl-2 rounded-sm w-1/2">
              {items[i]}
            </p>
            <p className={`text-lg font-bold text-white mr-6 pr-2 rounded-sm w-1/2 text-end`}>
              {i + 1}
            </p>
          </div>
        </div>
      );
    }
    return storage;
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

      <div className="w-full h-3/6 mt-2 gap-2">
        <div className="w-5/6 h-5/6 flex flex-row m-auto mt-12 gap-8">
          <div className="w-full cursor-pointer bg-[url('https://th.bing.com/th/id/R.65ad262a6fec2548828662eca1e620d3?rik=BQhGjlEp1%2fNb3A&riu=http%3a%2f%2fstatic.guim.co.uk%2fsys-images%2fGuardian%2fPix%2fpictures%2f2010%2f9%2f20%2f1284987876422%2fAerial-Views-Of-New-York--011.jpg&ehk=Vi7JcIkgHBDBCgT1aTvtUr%2fogVeWTtYiSh%2fwyjq%2bRzc%3d&risl=&pid=ImgRaw&r=0')] overflow-hidden rounded-md h-full relative">
            <div className="w-full flex flex-col absolute inset-x-0 bottom-0 mb-5 ml-4">
              <p className="text-4xl font-bold text-white">
                {" "}
                {details[0].title}{" "}
              </p>
              <p className=" text-xl w-5/6 text-white">
                {details[0].description}
              </p>
              <p className="text-gray-300 text-md"> {details[0].date} </p>
            </div>
          </div>

          <div className="w-2/4 bg- overflow-hidden h-full relative rounded-md overflow-y-scroll scrollbar-hide bg-[radial-gradient(ellipse_at_right,_var(--tw-gradient-stops))] from-gray-700 via-gray-900 to-black">
            {rankingComponent(ranking)}
          </div>
        </div>
      </div>

      <div id="News" className="w-full h-full">
        {/* <ComponentWrapperPage src={components.videoList}></ComponentWrapperPage> */}
      </div>
    </>
  );
};
HomePage.getLayout = useDefaultLayout;

export default HomePage;
