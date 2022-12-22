import React from "react"
import { LoginForm, RegisterForm } from "../components"
import { ReactComponent as Logo } from "../../assets/menu_logos.svg"
import "../../styles/auth.css"
import { Navigate, Route, Routes} from "react-router-dom"

export const AuthPage = () => {
     return (
          <div className='auth-container'>
               <div className='auth-bg'>
                    <Logo className='' />
               </div>
               <div className='form-container'>
                    <Routes>
                         <Route
                              path='/ingresar/:token'
                              element={<LoginForm />}
                         />
                         <Route path='/registrarse/*' element={<RegisterForm />} />
                         <Route path='/*' element={<Navigate to={"/ingresar"} />} />
                    </Routes>
               </div>
          </div>
     )
}
