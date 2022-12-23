import React,{ useContext } from "react"
import { Navigate } from "react-router-dom"
import { AuthContext } from "../../auth"
import { SuperUserPage } from "../superUser"
import { UserPage } from "../user"

export const AdminPage = () => {
     const {
          state: { user, logged },
     } = useContext(AuthContext)
     if(!logged) return <Navigate to={'/'} />
     return user.isSuperuser ? <SuperUserPage /> : <UserPage />
}
