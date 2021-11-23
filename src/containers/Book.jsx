import React from 'react'
// import { useParams } from 'react-router'

// Logos
import { ReactComponent as Logos } from '../assets/menu_logos.svg'
// Images
import cover1 from '../assets/cover-1.png'
import cover2 from '../assets/cover-2.png'
import cover3 from '../assets/cover-3.png'
import cover4 from '../assets/cover-4.png'

// Footer
import Footer from '../components/Footer'

// Style
import '../styles/main.css'

export default function Book () {
    // const {name} = useParams()
    const score = ['Bueno', 'Muy Bueno', 'Extraordinario']
    const galleryImgs = [cover1, cover2, cover3, cover4]

    return (
        <React.Fragment>
            <div className="flex libro">
                <div className="flex libro-header">
                    <div className="flex libro-top-info">
                        <p>Autor: Janssen, Mark</p>
                        <p>Año de publación: 2006</p>
                        <p>{score[2]}</p>
                    </div>
                    <h2 className="libro-title">
                        {/* {name} */}
                        ¡Alto! ¡Monstruos!
                    </h2>
                    <div className="review">
                        <h4>Crítica:</h4>
                        <p>Este cuento relata la historia de dos hermanas que buscan deshacerse de varios artículos, pero en el camino se encuentran con aterradores monstruos que deberán convencer para lograr pasar y conseguir su cometido. Este libro álbum cuenta la historia a través de ilustraciones llenas de colores brillantes. La historia es coherente, cautivadora y abre un espacio para la interpretación de los lectores. El texto no declara explícitamente su propósito, pero se puede interpretar que busca concientizar sobre el reciclaje. Se recomienda para niños a partir de los 3 años. </p>
                    </div>
                    <div className="reviewed-by">
                        <p>Reseñado por:</p>
                        <Logos style={{width: 280}} />
                    </div>
                </div>
                <div className="flex libro-info-container">
                    <div className="libro-gallery flex">
                        <div className="book-gallery-stage flex">
                            <div>
                                <img src={galleryImgs[1]} alt="" />
                                <img src={galleryImgs[2]} alt="" />
                                <img src={galleryImgs[3]} alt="" />
                            </div>
                            <img src={galleryImgs[0]} alt="" />
                        </div>
                    </div>
                    <div className="flex libro-info">
                        <div>
                            <h3>Palabras clave</h3>
                            <div className="flex tags">
                                <p>Monstruos</p>
                                <p>Naturaleza</p>
                                <p>Misterio</p>
                            </div>
                        </div>
                        <div>
                            <h3>Especificaciones:</h3>
                            <ul>
                                <li>ISBN: </li>
                                <li>Año de publicación: </li>
                                <li>Ancho: </li>
                                <li>Alto: </li>
                                <li>Páginas: </li>
                                <li>Tipo de encuadernación: </li>
                                <li>Editorial: </li>
                                <li>Colección: </li>
                                <li>Edades: </li>
                                <li>Autor: </li>
                                <li>Ilustración: </li>
                                <li>Ilustrador: </li>
                            </ul>
                        </div>
                        <div>
                            <h3>Género literario:</h3>
                            <ul>
                                <li>Género literario: </li>
                                <li>Subgénero literario: </li>
                            </ul>
                        </div>
                    </div>

                </div>
            </div>
            <Footer />
        </React.Fragment>
    )
}