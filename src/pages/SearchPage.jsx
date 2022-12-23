import { useQuery } from "@apollo/client"
import { Grid, Typography } from "@mui/material"
import React, { useMemo } from "react"
import { useLocation } from "react-router-dom"
import BookCard from "../components/BookCard"
import { searchBooks } from "../graphql/queries"
import { tagSelectors } from "../utils"

export const SearchPage = () => {
     const location = useLocation()
     const stringParams = new URLSearchParams(location.search)
     const label = stringParams.get("label")
     const q = stringParams.get("q")

     const tagSelected = useMemo(() => {
          return tagSelectors.find((tag) => tag.label === label)
     }, [location.search])

     const searchQuery = useQuery(searchBooks, {
          variables: tagSelected.fn(q),
     })

     const showBooks = useMemo(() => {
          return searchQuery?.data?.bookSearch?.books.length > 0 ? true : false
     }, [searchQuery.data])

     return (
          <Grid
               container
               justifyContent={"center"}
               pt={14}
               backgroundColor={"#f0f0f0"}
               minHeight={"100vh"}
          >
               {showBooks ? (
                    searchQuery.data.bookSearch.books.map((book) => (
                         <BookCard
                              key={book.ISBN}
                              ISBN={book.ISBN}
                              authors={book.authors}
                              bookName={book.name}
                              imgSrc={book.imageOne}
                              score={book.score.name}
                         />
                    ))
               ) : (
                    <Typography
                         fontFamily={"Ubuntu"}
                         variant='h3'
                         fontWeight={800}
                         textAlign={"center"}
                         mt={6}
                    >
                         No hay resultados
                    </Typography>
               )}
          </Grid>
     )
}
