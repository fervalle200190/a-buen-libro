import React, { useState } from 'react'
import { Link } from 'react-router-dom'

import { ReactComponent as Logo } from '../assets/menu_logos.svg'
import '../styles/menu.css'

export default function Menu() {

    const [isOpen, setIsOpen] = useState(false)

    return (
        <React.Fragment>
            <div className="hamburger-container" onClick={() => setIsOpen(!isOpen)}>
                <div className="hamburger" id="hamburger">
                    <div className={!isOpen ? "ham-line" : "ham-line ham-line_one"}></div>
                    <div className={!isOpen ? "ham-line" : "ham-line ham-line_two"}></div>
                    <div className={!isOpen ? "ham-line" : "ham-line ham-line_three"}></div>
                </div>
            </div>
            <Logo className="menu-logo"/>
            <ul className={!isOpen ? "menu" : "menu menu-show"}>
                <li>
                    <Link onClick={() => setIsOpen(!isOpen)} to="/">Home</Link>
                </li>
                <li>
                    <Link onClick={() => setIsOpen(!isOpen)} to="/books">Todos</Link>
                </li>
                <li>
                    <Link onClick={() => setIsOpen(!isOpen)} to="/us">Nosotros</Link>
                </li>
            </ul>
        </React.Fragment>
    )
}