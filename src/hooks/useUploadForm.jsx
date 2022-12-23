import { useState } from "react"
import axios from "axios"

export const useUploadForm = (url) => {
     const [isSuccess, setIsSuccess] = useState(false)
     const [progress, setProgress] = useState(0)
     const [data, setData] = useState(undefined)

     const uploadForm = async (formData) => {
          const { data: resData } = await axios.post(url, formData, {
               headers: {
                    "Content-Type": "application/json",
               },
               withCredentials: true,
               onUploadProgress: (progressEvent) => {
                    const progress = (progressEvent.loaded / progressEvent.total) * 50
                    setProgress(progress)
               },
               onDownloadProgress: (progressEvent) => {
                    const progress = 50 + (progressEvent.loaded / progressEvent.total) * 50
                    setProgress(progress)
               },
          })
          setData(resData)
          setIsSuccess(true)
          return true
     }

     return { uploadForm, isSuccess, progress, data }
}
