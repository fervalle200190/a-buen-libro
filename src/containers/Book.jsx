import React, { useState } from 'react'
import { useParams } from 'react-router'
import { useQuery } from '@apollo/client'
import {getBook} from '../graphql/queries'

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
    const [book, setBook] = useState({})
    const {ISBN} = useParams()
    const getBooks = async () => {
        const {loading, error, data} = useQuery(getBook, {
            variables: {ISBN}
        })
        
        if (loading) return "Loading..."
        if (error) return "Error :("

        setBook(await data.bookDetail)        
        return data.bookDetail.name
    }
    getBooks()
    // useEffect(() => {
    // }, [])
    console.log(book)
    
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
                        {book.name}
                    </h2>
                    <div className="review">
                        <h4>Crítica:</h4>
                        <p>{book.review}</p>
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
                                <li>ISBN: {book.ISBN}</li>
                                <li>Año de publicación: </li>
                                <li>Ancho: {book.width}</li>
                                <li>Alto: {book.height}</li>
                                <li>Páginas: {book.pages}</li>
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