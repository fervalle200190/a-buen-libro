import { useQuery } from "@apollo/client"
import { Box, Grid, Typography } from "@mui/material"
import React, { useContext } from "react"
import { Navigate } from "react-router-dom"
import { AuthContext } from "../../../auth"
import BookCard from "../../../components/BookCard"
import { bookShelf } from "../../../graphql/queries"
import { UserInfo } from "../components"
import { ReactComponent as Favorite } from "../../../assets/favorite.svg"

export const UserPage = () => {
     const { state } = useContext(AuthContext)

     if (!state.logged) return <Navigate to={"/"} />

     const { data } = useQuery(bookShelf, {
          variables: { user: state.user.id },
          fetchPolicy: "network-only",
     })
     return (
          <Grid container flexDirection={"column"} pt={14} sx={{ backgroundColor: "#F0F0F0" }}>
               <Box ml={5} pb={3} display={"flex"}>
                    <div className={`orange-heart heart-container white-heart`}>
                         <Favorite />
                    </div>
                    <Typography
                         fontSize={20}
                         fontFamily={"Ubuntu"}
                         color={"#FE8F3C"}
                         fontWeight={500}
                    >
                         Mi repisa
                    </Typography>
               </Box>
               <div className='user-admin'>
                    <div className='my-bookshelf-container'>
                         <Grid container>
                              {data?.shoppingCartSearch?.map(({ book }) => (
                                   <BookCard
                                        key={book.ISBN}
                                        ISBN={book.ISBN}
                                        authors={book.authors}
                                        bookName={book.name}
                                        imgSrc={book.imageOne}
                                        score={book.score.name}
                                   />
                              ))}
                         </Grid>
                    </div>
                    <div className='my-info-container'>
                         <UserInfo user={state.user} />
                    </div>
               </div>
          </Grid>
     )
}
