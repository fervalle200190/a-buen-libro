import React, { useState } from 'react'
import { useParams } from 'react-router'
import { useQuery } from '@apollo/client'
import { getBook } from '../graphql/queries'
import { Link } from 'react-router-dom'

// Logos
import { ReactComponent as Logos } from '../assets/menu_logos.svg'
// Images
import { ReactComponent as Aceptable } from '../assets/0.svg'
import { ReactComponent as Bueno } from '../assets/1.svg'
import { ReactComponent as MuyBueno } from '../assets/2.svg'
import { ReactComponent as Extraordinario } from '../assets/3.svg'

// Footer
import Footer from '../components/Footer'

// Style
import '../styles/main.css'

export default function Book ({
    setKeywordSearch,
    setCategorySearch,
    // keywordSearch,
    // setKeywordSearch
}) {
    const [stageSrc, setStageSrc] = useState()
    // const backUrl = process.env.REACT_APP_BACK_URL
    const {ISBN} = useParams()

    const { loading, error, data } = useQuery(getBook, {
        variables: {ISBN}
    })
    if (loading) return 'Loading...'
    if (error) return `Error! ${error.message}`
    const book = data.bookDetail
    
    let galleryImgs = [
        book.imageOne ? book.imageOne : null,
        book.imageTwo ? book.imageTwo : null,
        book.imageThree ? book.imageThree : null,
        book.imageFour ? book.imageFour : null
    ]
    
    return (
        <React.Fragment>
            <div className="flex libro">
                <div className="flex libro-header">
                    <div className="flex libro-top-info">
                        {book.authors.length !== 0 ?
                            <p style={{margin: 0}}><span>Autor:</span> {book.authors.length > 1 ?
                                    book.authors.map(e => 
                                        {
                                            return <span key={e}>{e.name} {e.lastName ? e.lastName + ', ' : ''}</span>
                                        }
                                    ) :
                                    book.authors.map(e =>
                                        {
                                            return <span key={e}>{e.name} {e.lastName ? e.lastName : ''}</span>
                                        }
                                    )
                                }
                            </p>
                        :
                        null
                        }
                        {book.year &&
                            <p style={{lineHeight: 1, margin: 0}}>Año de publicación: {book.year}</p>
                        }
                        <p style={{margin: 0}}>
                            {
                                book.score.name === 'Aceptable' ? <Aceptable className='scoreIconSmall' /> :
                                book.score.name === 'Bueno' ? <Bueno className='scoreIconSmall' /> :
                                book.score.name === 'Muy bueno' ? <MuyBueno className='scoreIconSmall' /> :
                                <Extraordinario className='scoreIconSmall' />
                            }
                            {book.score.name}
                        </p>
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
                                <img onClick={() => setStageSrc(galleryImgs[0])} src={galleryImgs[0]} alt="" />
                                <img onClick={() => setStageSrc(galleryImgs[1])} src={galleryImgs[1]} alt="" />
                                <img onClick={() => setStageSrc(galleryImgs[2])} src={galleryImgs[2]} alt="" />
                                <img onClick={() => setStageSrc(galleryImgs[3])} src={galleryImgs[3]} alt="" />
                            </div>
                            <img src={stageSrc ? stageSrc : galleryImgs[0]} alt="" />
                        </div>
                    </div>
                    <div className="flex libro-info">
                        <div>
                            <h3>Palabras clave</h3>
                            <div className="flex tags">
                                {book.keyWords.map((e) => {
                                   return (
                                        <p key={e.name} className='clickable'>
                                            <Link
                                                onClick={() => setKeywordSearch(e.name)}
                                                to={'/books'}
                                            >
                                                {e.name}
                                            </Link>
                                        </p>
                                    )
                                })
                                }
                            </div>
                        </div>
                        <div>
                            <h3>Edades</h3>
                            <div className="flex tags">
                                {book.ageRange.map((e) => {
                                   return (        
                                        <p key={e.name} className='clickable'>
                                            <Link
                                                onClick={() => setCategorySearch(e.name)}
                                                to={'/books'}
                                            >
                                                {e.name}
                                            </Link>
                                        </p>
                                    )
                                })
                                }
                            </div>
                        </div>
                        <div>
                            <h3>Especificaciones</h3>
                            <ul>
                                <li>ISBN: {book.ISBN}</li>
                                {book.year &&
                                    <li>Año de publicación: {book.year}</li>
                                }
                                {book.width &&
                                    <li>Ancho: {book.width}</li>
                                }
                                {book.height &&
                                    <li>Alto: {book.height}</li>
                                }
                                {book.pages &&
                                    <li>Páginas: {book.pages}</li>
                                }
                                {book.bookBindings !== 0 ?
                                    book.bookBindings.length > 1 ?
                                    <li>Tipo de encuadernación: {book.bookBindings.map(e => e.name + ', ')}</li> :
                                    <li>Tipo de encuadernación: {book.bookBindings.map(e => e.name)}</li>
                                :
                                null
                                }
                                {book.editorial &&
                                    <li>Editorial: {book.editorial.name}</li>
                                }
                                {book.collection &&
                                    <li>Colección: {book.collection.name}</li>
                                }
                                {book.authors.length !== 0 ?
                                    book.authors.length > 1 ?
                                    <li>Autor: {book.authors.map(e => e.name + ' ' + e.lastName + ', ')}</li> :
                                    <li>Autor: {book.authors.map(e => e.name + ' ' + e.lastName)}</li>
                                :
                                null
                                }
                                {book.illustrators.length !== 0 ?
                                    book.illustrators.length > 1 ?
                                    <li>Ilustrador: {book.illustrators.map(e => e.name + ' ' + e.lastName + ', ')}</li> :
                                    <li>Ilustrador: {book.illustrators.map(e => e.name + ' ' + e.lastName)}</li>
                                :
                                null
                                }
                                {
                                    book.genre && (
                                        <li>
                                            Género literario: {book.genre.name}{
                                                
                                                book.subGenres.length !== 0 &&
                                                    book.subGenres.length > 1 ?
                                                    ', '
                                                    :
                                                    ''
                                            }
                                            {book.subGenres.length !== 0 ?
                                                book.subGenres.length > 1 ?
                                                book.subGenres.map(e => e.name + ', ') :
                                                ', ' + book.subGenres.map(e => e.name)
                                            :
                                            null}
                                        </li>
                                    )
                                }
                            </ul>
                        </div>
                    </div>

                </div>
            </div>
            <Footer />
        </React.Fragment>
    )
}