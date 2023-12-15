import { useDefaultLayout } from "@/hooks/useLayout";
import type { NextPageWithLayout } from "@/utils/types";
const HomePage: NextPageWithLayout = () => {
  return (
    <>
      <div className="h-screen bg-white">
        {" "}
        <div className="p-14">
          <p className="Title text-3xl">What is new in UI 2.0?</p>
          <p className=" text-xl">
            + New font! <span className="Title text-xl">Urban</span> and{" "}
            <span className="Sub-title text-xl">Allrounder</span> <br />
            + New layout!
            <br />+ New colour <span className="Ocean-blue ">
              Ocean-blue
            </span>{" "}
            and{" "}
            <span className="Blue p-2 System-background-ocean-blue rounded-lg">
              Blue
            </span>
            <br />
            + New animation! 2x smooth!
          </p>
        </div>
      </div>
    </>
  );
};
HomePage.getLayout = useDefaultLayout;

export default HomePage;
