import React from 'react'
import { ReactComponent as Logo } from '../assets/menu_logos.svg'
// import { ReactComponent as IgLogo } from '../assets/ig_logo.svg'
import { Link } from 'react-router-dom'

import '../styles/footer.css'

export default function Footer () {

    return (
        <div className="footer flex">
            <div className="container flex">
                <Logo className="footer-logo"/>
                <div className="flex space-around">
                    <ul>
                        <h3>Categoría</h3>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/books">Libros</Link></li>
                    </ul>
                    <ul>
                        <h3>Nosotros</h3>
                        <li><Link to="/us">Sobre nosotros</Link></li>
                        <li><a href="mailto:abuenlibro@udd.cl">abuenlibro@udd.cl</a></li>
                    </ul>
                    {/* <ul>
                        <h3>Redes Sociales</h3>
                        <li>
                            <a href="https://instagram.com/abuenlibro" target="_blank" rel="noreferrer">
                                <IgLogo style={{width: 30}}/>
                            </a>
                        </li>
                    </ul> */}
                </div>
            </div>
            <p>© 2021 Todos los derechos reservados. Diseñado y desarrollado por zooma.design</p>
        </div>
    )
}