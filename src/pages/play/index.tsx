import { useDefaultLayout } from "@/hooks/useLayout";
import type { NextPageWithLayout } from "@/utils/types";

const PlayPage: NextPageWithLayout = () => {
  const cameraOn = () => {
    navigator.mediaDevices.getUserMedia({ video: true })
      .then((stream) => {
        const videoElement = document.querySelector('.camera-stream');
        if (videoElement) {
          videoElement.srcObject = stream;
        }
      })
      .catch((error) => {
        console.error('Error accessing camera:', error);
      });
  };

  return (
    <>
      <div className="Sub-title relative">
        <div className="VStack w-3/4 relative">
          <video
            className="rounded-lg"
            src="https://firebasestorage.googleapis.com/v0/b/fileuploader-7c008.appspot.com/o/uploads%2F1702735616725-RE.mp4?alt=media&token=82c62600-7ee4-47fd-93dc-21d94bbd312b"
            controls={true}
          ></video>
          <div className="relative">
            <video
              className="camera-stream absolute rounded-lg w-36 bottom-0 right-0 m-4"
              autoPlay={true} // Auto-play the camera stream
            ></video>
          </div>
          <div className="HStack w-full justify-between">
            <p className="">Title</p>
            <p
              onClick={cameraOn}
              className="Button-primary p-2 pl-4 pr-4 cursor-pointer"
            >
              React
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

PlayPage.getLayout = useDefaultLayout;

export default PlayPage;
