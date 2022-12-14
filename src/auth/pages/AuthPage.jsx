import React from "react"
import { LoginForm } from "../components"
import { ReactComponent as Logo } from '../../assets/menu_logos.svg'
import '../../styles/auth.css'


export const AuthPage = () => {
     return (
          <div className="auth-container">
               <div className="auth-bg">
                    <Logo className="" />
               </div>
               <div className="form-container">
                    <LoginForm />
               </div>
          </div>
     )
}
