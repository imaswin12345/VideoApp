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

// get all watch history
export const getHistory = async () => {
  return await commanAPI("GET", `${serverURL}/history`, "")
}

// add category to json server

export const  saveCategory = async (body)=> {
  return await commanAPI("POST",`${serverURL}/categories`,body)
}

//   get category from json server
 
export const  getAllCategory = async ()=> {
  return await commanAPI("GET",`${serverURL}/categories`,"")


}

// delete catogary

export const  deleteCategory = async (id)=> {
  return await commanAPI("DELETE",`${serverURL}/categories/${id}`,{})


}

// update Category form json server

export const updateCategory = async (id,body)=>{

  return await commanAPI("PUT",`${serverURL}/categories/${id}`,body)
}


// delete WatchHistory 
 export const deleteHistory = async (id) => {
  return await commanAPI("DELETE", `${serverURL}/history/${id}`, {})
}




// if it GET no Body needed
// if its POST body needed




