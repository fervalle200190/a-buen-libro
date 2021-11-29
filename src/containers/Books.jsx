import React from 'react'
// import { useQuery } from '@apollo/client'
// import {getBook} from '../graphql/queries'
import { Link } from 'react-router-dom'

// Components
import Filters from '../components/Filters'
import Footer from '../components/Footer'
// Style
import '../styles/main.css'
// Images
import header from '../assets/books-header.jpg'

export default function Books () {

    // const getBooks = () => {
    //     const {loading, error, data} = useQuery(getBook)
        
    //     if (loading) return "Loading..."
    //     if (error) return "Error :("

    //     console.log(data.bookDetail)
    //     return data.bookDetail.name
    // }

    return (
            <div style={{backgroundColor: "#F0F0F0"}}>
                <header
                    className="us-header flex jus-algn-center bkg-img books-header"
                    style={{backgroundImage: `url(${header})`}}
                >
                    <div className="container">
                        <h3 className="header-big-titles outline white">Todos</h3>
                        <h2 className="titles">Encuentra un libro</h2>
                    </div>
                </header>
                <div className="filters">
                    <h3 className="blue">Filtra tu búsqueda</h3>
                    <Filters />
                </div>
                <div className="book-cards-container">
                    <div>
                        <Link to="/book/9789563642384">Libro</Link>
                    </div>
                </div>
                <Footer />
            </div>
    )
}