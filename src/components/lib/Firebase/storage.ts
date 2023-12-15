import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { storage } from ".";

export async function uploadVideo(file: File) {
    try{
        const filePath = `uploads/${Date.now()}-${file.name}`;
        const storageRef = ref(storage, filePath);

        await uploadBytes(storageRef, file);
        const downloadURL = await getDownloadURL(storageRef);
        console.log("File uploaded:", downloadURL);
        return downloadURL;
      } catch (error: any) {
        console.error("Error uploading file:", error.message);
        // Handle error
        throw error;
      }
}