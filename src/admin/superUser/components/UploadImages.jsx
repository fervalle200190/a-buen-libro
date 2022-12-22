import { Box, Typography } from "@mui/material"
import UploadIcon from "../../../assets/upload-file.svg"
import React from "react"

export const UploadImages = () => {
     return (
          <Box pt={8}>
               <Typography variant='h5' fontFamily={"Ubuntu"} fontWeight={800} fontSize={25} mb={3}>
                    Cargar Imágenes de libros
               </Typography>
               <label>
                    <div className='flex-drag'>
                         <div className='drag-and-drop-container'>
                              <img src={UploadIcon} alt='upload' className='upload-icon' />
                              <Box sx={{ width: "243px" }}>
                                   Puedes arrastrar el zip aquí o buscar el zip
                              </Box>
                         </div>
                    </div>
                    <input type='file' name='books' id='' className='file-input' />
               </label>
          </Box>
     )
}
