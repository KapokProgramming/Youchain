import { NextPageWithLayout } from "@/utils/types";

let hoverTimeout: NodeJS.Timeout | null = null;

const toolbar = () => {
  const stageElement = document.getElementById("stage");
  if (stageElement) {
    stageElement.style.width = "50%";
    stageElement.style.right = "0";
  }
};


const startHoverTimer = () => {
  hoverTimeout = setTimeout(() => {
    toolbar();
  }, 600); // 600 milliseconds (0.6 seconds)
};

const cancelHoverTimer = () => {
  if (hoverTimeout) {
    clearTimeout(hoverTimeout);
    hoverTimeout = null;
  }
};
const HomePage: NextPageWithLayout = () => {
  return (
    <>
      <div
        id="stage"
        className="z-20 fixed m-4 rounded-lg top-0 bottom-0 left-0 right-0 overflow-hidden System-background-secondary"
      >
        {/* <div className="m-4 rounded-full right-4 z-40 fixed w-1/5 h-12 bg-black "></div> */}
      </div>

      <div
        id="safe-area"
        className="z-10 fixed top-0 bottom-0 left-0 right-0 overflow-hidden bg-black"
        onMouseEnter={startHoverTimer}
        onMouseLeave={cancelHoverTimer}
      >
        <div
          id="panel"
          className="VStack rounded-lg gap-1 p-4 m-4 w-1/5 top-0 bottom-0 left-0 right-0 absolute z-20 System-background Label"
        >
          <a href="">Home</a>
          <a href="">Short</a>
          <a href="">Subscriptions</a>
        </div>
      </div>
    </>
  );
};

export default HomePage;
