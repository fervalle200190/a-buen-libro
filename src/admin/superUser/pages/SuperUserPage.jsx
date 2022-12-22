import { Grid } from "@mui/material"
import React from "react"
import { Navigate, Route, Routes } from "react-router-dom"
import { SideAdminBar, Upload, Users } from "../components"

export const SuperUserPage = () => {
     return (
          <Grid container sx={{ pt: 14, pb: 14 }}>
               <Grid item xs={2} pt={5} sx={{ borderRight: "1px solid #000", height: "400px" }}>
                    <SideAdminBar />
               </Grid>
               <Grid item xs={10} pl={8} pt={5}>
                    <Routes>
                         <Route path='/upload' element={<Upload />} />
                         <Route path='/manage-users' element={<Users />} />
                         <Route path='/*' element={<Navigate to={"/admin/user/upload"} />} />
                    </Routes>
               </Grid>
          </Grid>
     )
}
