import React from "react"
import { ReactComponent as UserIcon } from "../../../assets/admin_panel_settings.svg"
import { ReactComponent as EditIcon } from "../../../assets/edit.svg"
import { ReactComponent as UploadIcon } from "../../../assets/backup.svg"
import { Box, List, ListItemButton } from "@mui/material"
import { Link } from "react-router-dom"

const BarItems = [
     {
          id: 1,
          title: "Cargar libros",
          icon: <UploadIcon />,
          link: "/admin/user/upload",
     },
     {
          id: 2,
          title: "Editar textos",
          icon: <EditIcon />,
          link: "/admin/user/upload",
     },
     {
          id: 3,
          title: "Usuarios",
          icon: <UserIcon />,
          link: "/admin/user/manage-users",
     },
]

export const SideAdminBar = () => {
     return (
          <Box sx={{ width: "100%" }}>
               <List>
                    {BarItems.map(({ title, icon, link }) => (
                         <Link to={link} key={title}>
                              <ListItemButton
                                   className={"mini-list"}
                                   sx={{
                                        gap: 3,
                                        height: "43px",
                                        ":hover": { backgroundColor: "#FE8F3C" },
                                   }}
                              >
                                   {icon}
                                   {title}
                              </ListItemButton>
                         </Link>
                    ))}
               </List>
          </Box>
     )
}
