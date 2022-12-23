import React, { useContext, useState } from "react"
import { Link, useLocation } from "react-router-dom"

import { ReactComponent as Logo } from "../assets/menu_logos.svg"
import "../styles/menu.css"
import { AuthContext } from "../auth"
import { MenuSearchBar } from "./MenuSearchBar"

export default function Menu() {
     const [isOpen, setIsOpen] = useState(false)
     const { state, onLogout } = useContext(AuthContext)
     const location = useLocation()

     const admin = location.pathname.includes("/admin/")
     const isSuperuser = state.logged ? state.user.isSuperuser : false

     const onLogoutClick = () => {
          localStorage.removeItem("bookUser")
          onLogout()
          // navigate('/')
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
                    <li style={{ cursor: "pointer" }}>
                         {!state.logged ? (
                              <>
                                   <Link to={"/auth/ingresar/log"} style={{ marginRight: "5px" }}>
                                        Inicia sesión
                                   </Link>
                                   /
                                   <Link to={"/auth/registrarse/log"} style={{ marginLeft: "5px" }}>
                                        Registrarse
                                   </Link>
                              </>
                         ) : admin ? (
                              <p onClick={onLogoutClick}>Cerrar sesión</p>
                         ) : isSuperuser ? (
                              <Link to={"/admin/user/upload"}>Administrador</Link>
                         ) : (
                              <Link to={"/admin/user/"}>Mi repisa</Link>
                         )}
                    </li>
               </ul>
          </React.Fragment>
     )
}
