"use client";
import { useDefaultLayout } from "@/hooks/useLayout";
import type { NextPageWithLayout } from "@/utils/types";
import { storage } from "@/components/lib/Firebase/index";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";

import { useRef, useState } from "react";
import { uploadVideo } from "@/components/lib/Firebase/storage";

const UploadPage = () => {
  const [dragActive, setDragActive] = useState<boolean>(false);
  const inputRef = useRef<any>(null);
  const [files, setFiles] = useState<any>([]);
  function handleChange(e: any) {
    e.preventDefault();
    console.log("File has been added");
    if (e.target.files && e.target.files[0]) {
      // Allow only one file to be selected
      setFiles([e.target.files[0]]);
    }
  }

  async function handleSubmitFile(e: any) {
    e.preventDefault();

    if (files.length !== 0) {
      const file = files[0];

      //TODO: File extension Check
      try {
        uploadVideo(file);
      } catch (e) {
        console.error(e);
      }
    } else {
      console.log("Please upload file");
    }
  }

  function handleDrop(e: any) {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      for (let i = 0; i < e.dataTransfer.files["length"]; i++) {
        setFiles((prevState: any) => [...prevState, e.dataTransfer.files[i]]);
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
    setFiles([]);
    setFiles(newArr);
  }

  function openFileExplorer() {
    inputRef.current.value = "";
    inputRef.current.click();
  }

  return (
    <div className="flex border-solid border-2 w-full h-full rounded-md">
      <form
        className={`${
          dragActive ? "bg-blue-400" : "bg-blue-100"
        }  p-4 w-full rounded-lg  min-h-[10rem] text-center flex flex-col items-center justify-center`}
        onDragEnter={handleDragEnter}
        onSubmit={handleSubmitFile}
        onDrop={handleDrop}
        onDragLeave={handleDragLeave}
        onDragOver={handleDragOver}
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

        <p>
          Drag & Drop files or{" "}
          <span
            className="font-bold text-blue-600 cursor-pointer"
            onClick={openFileExplorer}
          >
            <u>Select files</u>
          </span>{" "}
          to upload
        </p>

        <div className="flex flex-col items-center p-3">
          {files.map((file: any, idx: any) => (
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

        <button
          type="submit"
          className="mt-4 bg-blue-500 text-white p-2 rounded-md"
        >
          Upload
        </button>
      </form>
    </div>
  );
};

const UploaderPagesInput: NextPageWithLayout = (() => {
  return (
    <div className=" w-full h-full">
      <h1 className="text-white mt-5 ml-3 font-bold text-4xl">Upload Your Video</h1>
      <div className="h-full grid grid-cols-2">
        <div className="grid grid-rows-1 h-full w-full">
          <div className=" ml-5 h-full col-span-1 w-full mt-16">
            <div className="w-full h-2/4 overflow-hidden ml-5">
              <UploadPage />
            </div>
            <div className="col-span-1 w-full h-1/4 round-md overflow-hidden mt-16">
              <h1 className="text-white text-xl font-bold">Tags</h1>
              <select className="w-5/6 rounded-sm ml-16 mt-5 h-1/6 text-center">
                <option value="0"></option>
                <option value="1">Funny</option>
                <option value="2">Horror</option>
                <option value="3">Comedy</option>
                <option value="4">Science</option>
                <option value="5">Reaction</option>
              </select>
            </div>
          </div>
        </div>

        <div className="grid grid-rows-1 h-full w-full">

          <div className=" ml-16 h-full col-span-1 w-full mt-16">
            <h1 className="text-white font-bold text-xl ">Title</h1>
            <div className="w-full overflow-hidden ml-5 rounded-sm mt-8 h-1/6">
              <input type="area" className="w-3/4 h-1/4 pl-2" />
            </div>
            <div className="col-span-1 w-full h-3/4 round-md overflow-hidden -mt-12">
              <h1 className="text-white font-bold text-xl">Description</h1>
              <textarea className="w-3/4 rounded-sm ml-5 mt-5 h-3/6 p-2" />
            </div>
          </div>
          </div>
        </div>
      </div>
  );
});

UploaderPagesInput.getLayout = useDefaultLayout;

export default UploaderPagesInput;
