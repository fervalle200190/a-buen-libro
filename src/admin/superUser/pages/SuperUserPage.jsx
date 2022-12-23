import { Grid } from "@mui/material"
import React from "react"
import { Navigate, Route, Routes } from "react-router-dom"
import { SideAdminBar, Upload, Users } from "../components"

export const SuperUserPage = () => {
     return (
          <Grid container sx={{ pt: 14, pb: 14 }}>
               <Grid item md={2} xs={5} pt={5} sx={{ borderRight: "1px solid #000", height: "400px" }}>
                    <SideAdminBar />
               </Grid>
               <Grid item md={10} xs={7} pt={5} sx={{pl: {md: 8, xs: 2}}}>
                    <Routes>
                         <Route path='/upload' element={<Upload />} />
                         <Route path='/manage-users' element={<Users />} />
                         <Route path='/*' element={<Navigate to={"/admin/user/upload"} />} />
                    </Routes>
               </Grid>
          </Grid>
     )
}
