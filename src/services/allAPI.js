import { commanAPI } from "./commonAPI"
import { serverURL } from "./serverURL"


// uploading video

export const uploadVideo = async (body) => {
    return await commanAPI("POST", `${serverURL}/videos`, body) // Send the body parameter
}


//get all videos

export const getAllVideo = async ()=>{

    return await commanAPI("GET",`${serverURL}/videos`,"")

}

// get a single video 
export const getSingleVideo = async (id) => {
   return await commanAPI("GET", `${serverURL}/videos/${id}`, "") // ✅ Correct URL
}




//delete a video
export const deleteAVideo = async (id) => {
  // Verify this matches your actual backend route
  return await commanAPI("DELETE", `${serverURL}/videos/${id}`, {})
}

// store video watching hystory to jason server

export const addHistory = async (videoHistory)=>{

  return await commanAPI ("POST",`${serverURL}/history`,videoHistory )
}