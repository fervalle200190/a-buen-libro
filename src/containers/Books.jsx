import React, { useState, useEffect } from 'react'
import { useQuery, useLazyQuery } from '@apollo/client'
import { getBooks, booksSearchBar } from '../graphql/queries'
import Pagination from '@mui/material/Pagination'

// Components
import Filters from '../components/Filters'
import Footer from '../components/Footer'
import BookCard from '../components/BookCard'
import SearchBar from '../components/SearchBar'

// Style
import '../styles/main.css'
// Images
import header from '../assets/books-header.jpg'
// import cover1 from '../assets/cover-1.png'

export default function Books ({
    categorySearch,
    setCategorySearch,
    scoreSearch,
    setScoreSearch,
    keywordSearch,
    setKeywordSearch
}) {
    const [bookBindingsChecked, setBookBindingsChecked] = useState([])
    const [ilustrationsChecked, setilustrationsChecked] = useState([])
    const [genreChecked, setGenreChecked] = useState([])
    const [keyWordsChecked, setKeyWordsChecked] = useState(keywordSearch ? [keywordSearch] : [])
    const [scoreChecked, setScoreChecked] = useState(scoreSearch ? [scoreSearch] : [])
    const [editorialsChecked, setEditorialsChecked] = useState([])
    const [ageRanges, setAgeRanges] = useState(categorySearch ? [categorySearch] : [])
    const [yearValues, setYearValues] = useState([0, 2022])
    const [page, setPage] = useState(1)

    const changePage = (event, value) => {
        setPage(value)
    }

    useEffect(() => {
        filterSearch({variables: masterFilters, fetchPolicy: 'network-only'})
    }, [page])

    const { loading, error, data } = useQuery(getBooks, {fetchPolicy: 'network-only'})
    const { data: searchBarData } = useQuery(booksSearchBar, {fetchPolicy: 'network-only'})
   
    let year = new Date().getFullYear()
    const [from, setFrom] = useState(0)
    const [until, setUntil] = useState(year)

    let masterFilters = {
        page: page,
        startYear: yearValues[0],
        endYear: yearValues[1],
        bookBindings: bookBindingsChecked.length > 0 ? bookBindingsChecked : undefined,
        editorials: editorialsChecked.length > 0 ? editorialsChecked : undefined,
        ilustrations: ilustrationsChecked.length > 0 ? ilustrationsChecked : undefined,
        genre: genreChecked.length > 0 ? genreChecked : undefined,
        keyWords: keyWordsChecked.length > 0 ? keyWordsChecked : undefined,
        score: scoreChecked.length > 0 ? scoreChecked : undefined,
        ageRange: ageRanges.length > 0 ? ageRanges : undefined,
    }

    const clearFilters = () => {
        setBookBindingsChecked([])
        setilustrationsChecked([])
        setGenreChecked([])
        setKeyWordsChecked([])
        setScoreChecked([])
        setEditorialsChecked([])
        setAgeRanges([])
        setYearValues([0, 2022])
        setPage(1)
        setFrom(0)
        setUntil(year)

        masterFilters = {
            page: page,
            startYear: yearValues[0],
            endYear: yearValues[1],
            bookBindings: undefined,
            editorials: undefined,
            ilustrations: undefined,
            genre: undefined,
            keyWords: undefined,
            score: undefined,
            ageRange: undefined,
        }

    }

    const [filterSearch, {load, err, data: data2}] = useLazyQuery(getBooks)

    if (loading) return 'Loading...'
    if (error) return `Error! ${error.message}`
    
    let books = data.bookSearch.books
    let pages = data.bookSearch.pages
    let searchBar = searchBarData

    console.log(books)

    if (load) return <p>Loading ...</p>
    if (err) return `Error! ${error}`
    if(data2) {
        books = data2.bookSearch.books
        pages = data2.bookSearch.pages
    }

    const getBookCards = () => {
        let list = []
        books.map((e, i) => {
            list.push(
                <BookCard
                    key={i}
                    imgSrc={e.imageOne}
                    ISBN={e.ISBN}
                    authors={e.authors}
                    bookName={e.name}
                    score={e.score.name}
                />
            )
        })
        return list
    }

    return (
            <div style={{backgroundColor: "#F0F0F0"}}>
                <header
                    className='us-header flex jus-algn-center bkg-img books-header'
                    style={{backgroundImage: `url(${header})`}}
                >
                    <div className='container'>
                        {/* <h3 className='header-big-titles outline white'>Todos</h3> */}
                        <h2 className='titles'>Encuentra un libro</h2>
                    </div>
                </header>
                <div className='all-books container'>
                    <div className='filters'>
                        <h3 className='blue'>Filtra tu búsqueda</h3>
                        <Filters
                            categorySearch={categorySearch}
                            setCategorySearch={setCategorySearch}
                            scoreSearch={scoreSearch}
                            setScoreSearch={setScoreSearch}
                            bookBindingsChecked={bookBindingsChecked}
                            setBookBindingsChecked={setBookBindingsChecked}
                            ilustrationsChecked={ilustrationsChecked}
                            setilustrationsChecked={setilustrationsChecked}
                            genreChecked={genreChecked}
                            setGenreChecked={setGenreChecked}
                            keyWordsChecked={keyWordsChecked}
                            setKeyWordsChecked={setKeyWordsChecked}
                            scoreChecked={scoreChecked}
                            setScoreChecked={setScoreChecked}
                            editorialsChecked={editorialsChecked}
                            setEditorialsChecked={setEditorialsChecked}
                            ageRanges={ageRanges}
                            setAgeRanges={setAgeRanges}
                            yearValues={yearValues}
                            setYearValues={setYearValues}
                            filterSearch={filterSearch}
                            masterFilters={masterFilters}
                            clearFilters={clearFilters}
                            from={from}
                            setFrom={setFrom}
                            until={until}
                            setUntil={setUntil}
                            keywordSearch={keywordSearch}
                            setKeywordSearch={setKeywordSearch}
                            searchBar={searchBar}
                        />
                    </div>
                    <div className='book-cards-container'>
                        <div style={{width: '100%'}}>
                            {searchBar &&
                                <SearchBar
                                    data={searchBar}
                                />
                            }
                        </div>
                        {
                            books.length !== 0 ?
                                getBookCards() :
                            <h3>No hay resultados en la búsqueda</h3>
                        }
                    </div>
                </div>
                <div className='pagination'>
                    <Pagination count={pages} page={page} onChange={changePage} />
                </div>
                <Footer />
            </div>
    )
}