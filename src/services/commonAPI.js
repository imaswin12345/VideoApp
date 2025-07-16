import axios from "axios";

export const commanAPI = async (httpMethod,url,reqaBody)=>{
    const reqConfig={
        method:httpMethod,url,
        data:reqaBody,
        headers:{
            "Content-type":"application/json"
        }
    }


return await axios(reqConfig).then(
    (result)=>{
        return result
    }
).catch((err)=>{
    return err.response
})

}