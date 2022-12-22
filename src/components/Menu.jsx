import React, { useContext, useState } from "react"
import { Link, useLocation, useNavigate } from "react-router-dom"

import { ReactComponent as Logo } from "../assets/menu_logos.svg"
import "../styles/menu.css"
import { AuthContext } from "../auth"
import { MenuSearchBar } from "./MenuSearchBar"

export default function Menu() {
     const [isOpen, setIsOpen] = useState(false)
     const { state, onLogout } = useContext(AuthContext)
     const navigate = useNavigate()
     const location = useLocation()

     const admin = location.pathname.includes('/admin/')

     const onLogoutClick = () => {
          localStorage.removeItem("bookUser")
          onLogout()
          // navigate('/')
     }

     const onLoginClick = () => {
          navigate(`auth/ingresar/log`)
     }

     const onAdminCLick = ()=> {
          navigate(`/admin/user`)
     }

     return (
          <React.Fragment>
               <div className='hamburger-container' onClick={() => setIsOpen(!isOpen)}>
                    <div className='hamburger' id='hamburger'>
                         <div className={!isOpen ? "ham-line" : "ham-line ham-line_one"}></div>
                         <div className={!isOpen ? "ham-line" : "ham-line ham-line_two"}></div>
                         <div className={!isOpen ? "ham-line" : "ham-line ham-line_three"}></div>
                    </div>
               </div>
               <Link to='/'>
                    <Logo className='menu-logo' />
               </Link>
               <ul className={!isOpen ? "menu" : "menu menu-show"}>
                    <li>
                         <MenuSearchBar />
                    </li>
                    <li>
                         <Link onClick={() => setIsOpen(!isOpen)} to='/'>
                              Home
                         </Link>
                    </li>
                    <li>
                         <Link onClick={() => setIsOpen(!isOpen)} to='/books'>
                              Libros
                         </Link>
                    </li>
                    <li>
                         <Link onClick={() => setIsOpen(!isOpen)} to='/us'>
                              Nosotros
                         </Link>
                    </li>
                    {!state.logged ? (
                         <li onClick={onLoginClick}>inicia sesion</li>
                    ) : admin ? (
                         <li onClick={onLogoutClick}>cerrar sesion</li>
                    ) : (
                         <li onClick={onAdminCLick}>Administrador</li>
                    )}
               </ul>
          </React.Fragment>
     )
}
