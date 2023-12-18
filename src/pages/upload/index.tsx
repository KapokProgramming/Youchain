import { useDefaultLayout } from "@/hooks/useLayout";
import type { NextPageWithLayout } from "@/utils/types";
import { storage } from "@/components/lib/Firebase/index";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { PiUploadSimple } from "react-icons/pi";
import { IoIosClose } from "react-icons/io";
import { useSearchParams } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { uploadVideo } from "@/components/lib/Firebase/storage";
import { useRouter } from "next/router";
import { deleteObject } from "firebase/storage";
import { ComponentWrapperPage } from "@/components/ComponentWrapperPage";
import { useAuthStore } from "@/stores/auth";
import { useBosComponents } from "@/hooks/useBosComponents";
import { uploadBytesResumable } from "firebase/storage";
const UploadPage = () => {
  const [dragActive, setDragActive] = useState<boolean>(false);
  const inputRef = useRef<any>(null);
  const videoRef = useRef<any>(null);
  const [files, setFiles] = useState<File[]>([]);
  const [tags, setTags] = useState<string[]>([]);
  const [tag, setTag] = useState<string>("");
  const [vdoUri, setVdoUri] = useState<string>("");
  const [uploadProgress, setUploadProgress] = useState<number>(0);
  const accountId = useAuthStore((store) => store.accountId);
  const components = useBosComponents();
  const searchParams = useRouter();
  const { fork } = searchParams.query;

  useEffect(() => {
    console.log(fork);
    // Additional logic related to the effect
  }, [fork]); // Add dependencies if needed

  async function handleSubmitFile(file: File) {
    if (!file || !file.name.endsWith(".mp4")) {
      console.error("Only video files (.mp4) are allowed!");
      return;
    }

    try {
      // Use FileReader to display video preview
      const reader = new FileReader();

      // Type guard to check if e.target is not null
      reader.onload = (e) => {
        if (e.target) {
          videoRef.current.src = e.target.result as string;
        }
      };

      reader.readAsDataURL(file);

      const storageRef = ref(storage, `videos/${file.name}`);
      const uploadTask = uploadBytesResumable(storageRef, file);

      // Update progress bar during upload
      uploadTask.on(
        "state_changed",
        (snapshot) => {
          const progress =
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          setUploadProgress(progress);
        },
        (error) => {
          console.error("Upload error:", error);
        },
        () => {
          // Upload completed successfully
          getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
            setVdoUri(downloadURL);
            console.log("File uploaded successfully");
          });
        }
      );
    } catch (e) {
      console.error(e);
    }
  }

  async function removeFile(fileName: any, idx: any) {
    try {
      // Remove file from the files state
      const newArr = [...files];
      newArr.splice(idx, 1);
      setFiles(newArr);

      // Remove video preview and progress bar
      setVdoUri("");
      setUploadProgress(0);

      // Remove video from the database
      const storageRef = ref(storage, `videos/${fileName}`);
      await deleteObject(storageRef);

      console.log("File removed successfully");
    } catch (error) {
      console.error("Error removing file:", error);
    }
  }

  function handleDrop(e: any) {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      const file = e.dataTransfer.files[0];
      if (file.type.startsWith("video/")) {
        setFiles([file]);
        handleSubmitFile(file); // Upload file when dropped
      } else {
        console.error("Only video files are allowed!");
      }
    }
  }

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    e.preventDefault();

    // Ensure that e.target is not null before accessing its properties
    if (e.target) {
      console.log("File has been added");

      if (e.target.files && e.target.files[0]) {
        const file = e.target.files[0];
        if (file.type.startsWith("video/")) {
          setFiles([file]);
          handleSubmitFile(file); // Upload file when selected
        } else {
          alert("Only video files are allowed!");
        }
      }
    }
  }

  function handleDragLeave(e: any) {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
  }

  function handleDragOver(e: any) {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(true);
  }

  function handleDragEnter(e: any) {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(true);
  }

  // function removeFile(fileName: any, idx: any) {
  //   const newArr = [...files];
  //   newArr.splice(idx, 1);
  //   setFiles(newArr);
  // }

  function openFileExplorer() {
    inputRef.current.value = "";
    inputRef.current.click();
  }

  function removeTag(index: number) {
    const newTags = [...tags];
    newTags.splice(index, 1);
    setTags(newTags);
  }

  function addTag() {
    let x = tag.trim();
    if (x !== "") {
      setTags([...tags, x]);
      setTag("");
    }
  }

  function manageKeyPress(e) {
    if (e.key === "Enter") {
      addTag();
    } else if (e.key === "Backspace") {
      removeTag(tags.length - 1);
    }
  }

  function LoopType(typeVideo: any) {
    const options = [];
    for (let i = 0; i < typeVideo.length; i++) {
      options.push(<option value={typeVideo[i]}>{typeVideo[i]}</option>);
    }
    return options;
  }

  return (
    <div className="VStack w-full h-full text-black Sub-title">
      <h1 className="Title mt-5 ml-3 font-bold text-4xl">Upload Your Video</h1>
      {fork && (
        <div className="p-2 rounded-md m-2 System-background-ocean-blue text-white HStack gap-4">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
          >
            <g fill="none" fill-rule="evenodd">
              <path d="M24 0v24H0V0h24ZM12.594 23.258l-.012.002-.071.035-.02.004-.014-.004-.071-.036c-.01-.003-.019 0-.024.006l-.004.01-.017.428.005.02.01.013.104.074.015.004.012-.004.104-.074.012-.016.004-.017-.017-.427c-.002-.01-.009-.017-.016-.018Zm.264-.113-.014.002-.184.093-.01.01-.003.011.018.43.005.012.008.008.201.092c.012.004.023 0 .029-.008l.004-.014-.034-.614c-.003-.012-.01-.02-.02-.022Zm-.715.002a.023.023 0 0 0-.027.006l-.006.014-.034.614c0 .012.007.02.017.024l.015-.002.201-.093.01-.008.003-.011.018-.43-.003-.012-.01-.01-.184-.092Z" />
              <path
                fill="#FFFF"
                d="M1 10a5 5 0 0 1 5-5h6a5 5 0 0 1 0 10 1 1 0 1 1 0-2 3 3 0 1 0 0-6H6a3 3 0 0 0-.75 5.906 1 1 0 0 1-.5 1.936A5.002 5.002 0 0 1 1 10Zm11 1a3 3 0 1 0 0 6h6a3 3 0 0 0 .75-5.905 1 1 0 0 1 .5-1.937A5.002 5.002 0 0 1 18 19h-6a5 5 0 0 1 0-10 1 1 0 1 1 0 2Z"
              />
            </g>
          </svg>
          <p>Fork: {fork}</p>
        </div>
      )}
      <div className="HStack h-full">
        <div className="VStack w-2/3 items-center">
          <div
            className=" border-dashed border-2 w-4/5 m-10 border-blue-700 p-4 rounded-lg text-center flex flex-col items-center justify-center "
            onDragEnter={handleDragEnter}
            onSubmit={handleSubmitFile}
            onDrop={handleDrop}
            onDragLeave={handleDragLeave}
            onDragOver={handleDragOver}
          >
            {vdoUri ? ( // Show progress bar only if video is uploaded
              <></>
            ) : (
              <>
                <input
                  placeholder="fileInput"
                  className="hidden"
                  ref={inputRef}
                  type="file"
                  multiple={true}
                  onChange={handleChange}
                  accept=".xlsx,.xls,image/*,.doc, .docx,.ppt, .pptx,.txt,.pdf"
                />
                <div className="VStack items-center gap-10 justify-center p-10">
                  <div className="VStack gap-2 items-center">
                    <PiUploadSimple className="w-10 h-10" />
                    <p>Drag & Drop file to upload</p>
                  </div>

                  <button
                    className="p-2 Button-primary rounded-md  "
                    onClick={openFileExplorer}
                    accept=".mp4"
                  >
                    {" "}
                    Select file
                  </button>
                  <input
                    placeholder="fileInput"
                    className="hidden"
                    ref={inputRef}
                    type="file"
                    multiple={true}
                    onChange={handleChange}
                    accept=".mp4"
                  />
                </div>
              </>
            )}

            <div className="w-full HStack">
              <progress
                value={uploadProgress}
                max="100"
                className={`w-full mt-3 System-background-blue rounded-md ${
                  uploadProgress === 100 || uploadProgress === 0 ? "hidden" : ""
                }`}
              ></progress>
              {uploadProgress === 100 && (
                <p className="text-green-500 mt-3">Upload completed!</p>
              )}
            </div>
            <video
              ref={videoRef}
              controls={!vdoUri} // Show controls only if the video is not uploaded
              className={`w-full max-h-96 ${!vdoUri ? "hidden" : ""}`} // Hide if video is not uploaded
            ></video>

            <div className="flex flex-col items-center p-3">
              {files.map((file, idx) => (
                <div key={idx} className="flex flex-row space-x-5">
                  <span>{file.name}</span>
                  <span
                    className="text-red-500 cursor-pointer"
                    onClick={() => removeFile(file.name, idx)}
                  >
                    remove
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="w-full">
          <ComponentWrapperPage
            src={components.videoUploadForm}
            componentProps={{ accountId: accountId, vdoUrl: vdoUri }}
          />
        </div>

        {/* <div className="m-10 VStack  w-1/3 gap-10">
          <div className="VStack justify-between h-full">
            <div className="VStack gap-4">
              <div className="VStack gap-2">
                <p className=" text-md">Title</p>
                <input
                  type="text"
                  name=""
                  id=""
                  placeholder="title"
                  className="p-2 rounded-md System-background-blue"
                />
              </div>
              <div className="VStack gap-2">
                <p className=" text-md">Desc</p>
                <textarea
                  name=""
                  id=""
                  cols={30}
                  rows={7}
                  className="p-2 rounded-md System-background-blue"
                  placeholder="lorem10"
                ></textarea>
              </div>
              <div className="VStack gap-2">
                <p className=" text-md">Tag</p>
                <div className="w-full">
                  {tags.map((t, i) => (
                    <span
                      key={i}
                      className="System-background-ocean-blue mr-2 rounded-md text-white p-1"
                    >
                      <span>{t}</span>
                      <span
                        onClick={() => removeTag(i)}
                        className=" cursor-pointer"
                      >
                        {" "}
                        x
                      </span>
                    </span>
                  ))}
                  <input
                    type="text"
                    value={tag}
                    onChange={(e) => setTag(e.target.value)}
                    onKeyDown={manageKeyPress}
                    placeholder="add tag"
                    className="w-auto p-2 rounded-md System-background-blue"
                  />
                </div>
              </div>
            </div>
            <div className="w-fullitems-end text-right">
              {" "}
              <button className=" p-2 Button-primary">Done</button>
            </div>
          </div>
        </div> */}
      </div>
    </div>
  );
};

UploadPage.getLayout = useDefaultLayout;

export default UploadPage;
