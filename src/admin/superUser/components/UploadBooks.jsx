import { Box, Typography } from "@mui/material"
import UploadIcon from "../../../assets/upload-file.svg"
import React, { useEffect, useState } from "react"
import { useUploadForm } from "../../../hooks"

export const UploadBooks = () => {
     const [uploadFiles, setUploadFiles] = useState([])
     const { uploadForm, data, progress } = useUploadForm(
          "https://www.abuenlibro.cl/api/upload_books"
     )

     const handleUploadFiles = (e) => {
          const chosenFiles = Array.prototype.slice.call(e.target.files)
          setUploadFiles(chosenFiles)
     }

     useEffect(() => {
          const postFiles = async () => {
               const formData = new FormData()
               formData.append("file", uploadFiles[0])
               formData.append("file2", uploadFiles[1])
               await uploadForm(formData)
          }
          postFiles()
     }, [uploadFiles])

     useEffect(() => {
          console.log(progress, data)
     }, [progress, data])

     return (
          <Box>
               <Typography variant='h5' fontFamily={"Ubuntu"} fontWeight={800} fontSize={25} mb={3}>
                    Cargar Libros
               </Typography>
               <label>
                    <input
                         type='file'
                         name='books'
                         id='books-upload'
                         className='file-input'
                         onChange={handleUploadFiles}
                         multiple
                    />
                    <div className='flex-drag'>
                         <div className='drag-and-drop-container'>
                              <img src={UploadIcon} alt='upload' className='upload-icon' />
                              <Box sx={{ width: "243px" }}>
                                   Puedes arrastrar el documento aquí o buscar el documento
                              </Box>
                         </div>
                         {uploadFiles.map((file) => (
                              <p key={file.name}>{file.name}</p>
                         ))}
                    </div>
               </label>
          </Box>
     )
}
