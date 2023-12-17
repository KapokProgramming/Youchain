import { useDefaultLayout } from "@/hooks/useLayout";
import type { NextPageWithLayout } from "@/utils/types";
import { storage } from "@/components/lib/Firebase/index";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { PiUploadSimple } from "react-icons/pi";
import { IoIosClose } from "react-icons/io";

import { useRef, useState } from "react";
import { uploadVideo } from "@/components/lib/Firebase/storage";

const UploadPage = () => {
  const [dragActive, setDragActive] = useState<boolean>(false);
  const inputRef = useRef<any>(null);
  const [files, setFiles] = useState<File[]>([]);
  const [tags, setTags] = useState<string[]>([]);
  const [tag, setTag] = useState<string>("");

  async function handleSubmitFile(file: File) {
    if (!file || !file.name.endsWith(".mp4")) {
      console.error("Only video files (.mp4) are allowed!");
      return;
    }

    try {
      await uploadVideo(file); // Await the file upload to complete
      console.log("File uploaded successfully");
    } catch (e) {
      console.error(e);
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

  function handleChange(e: any) {
    e.preventDefault();
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

  function removeFile(fileName: any, idx: any) {
    const newArr = [...files];
    newArr.splice(idx, 1);
    setFiles(newArr);
  }

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
      <div className="HStack h-full">
        <div className="VStack w-2/3 items-center">
          <div
            className=" border-dashed border-2 w-4/5 m-10 border-blue-700 p-4 rounded-lg text-center flex flex-col items-center justify-center "
            onDragEnter={handleDragEnter}
            onSubmit={handleSubmitFile}
            onDrop={handleDrop}
            onDragLeave={handleDragLeave}
            onDragOver={handleDragOver}
            onClick={openFileExplorer}
          >
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
              >
                {" "}
                select file
              </button>
            </div>

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
        <div className="m-10 VStack  w-1/3 gap-10">
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
                  cols="30"
                  rows="7"
                  className="p-2 rounded-md System-background-blue"
                  placeholder="lorem10"
                ></textarea>
              </div>
              <div className="VStack gap-2">
                <p className=" text-md">Tage</p>
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
              <button className=" p-2 Button-primary">
                Done
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

UploadPage.getLayout = useDefaultLayout;

export default UploadPage;
