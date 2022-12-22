import React, { useEffect, useMemo, useRef, useState } from "react"
import { ResultItem } from "./ResultItem"

export const SearchResults = ({ value, searchQuery }) => {
     const [showResults, setShowResults] = useState(value === "" ? false : true)
     const results = useRef()

     const closeResults = () => setShowResults(false)

     useEffect(() => {
          if (value !== "") return setShowResults(true)
          setShowResults(false)
     }, [value])

     useEffect(() => {
          const checkClick = (e) => {
               if (!results.current.contains(e.target)) {
                    setShowResults(false)
               }
          }
          document.addEventListener("click", checkClick)
          return () => document.removeEventListener("click", checkClick)
     }, [results])

     const showMessage = useMemo(() => {
          return searchQuery?.data?.bookSearch?.books?.length > 0 ? false : true
     }, [value, searchQuery])
     return (
          <div className={`search-results ${showResults ? "" : "hidden-results"}`} ref={results}>
               {showMessage ? (
                    <p className='search-message'>No hay resultados</p>
               ) : (
                    searchQuery.data.bookSearch.books.map((book) => (
                         <ResultItem key={book.name} closeResults={closeResults} {...book} />
                    ))
               )}
          </div>
     )
}
