import React, { useState } from "react"
import { Link } from "react-router-dom"

import { ReactComponent as Logo } from "../assets/menu_logos.svg"
import { ReactComponent as Lupa } from "../assets/lupa.svg"
import "../styles/menu.css"

export default function Menu() {
     const [isOpen, setIsOpen] = useState(false)

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
                         <div className='input-search-container'>
                              <Lupa className="menu-lupa" />
                              <input
                                   type='search'
                                   className='input-search-menu'
                                   placeholder='Busca un libro'
                              />
                         </div>
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
               </ul>
          </React.Fragment>
     )
}
