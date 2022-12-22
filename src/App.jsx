import React, { useState } from "react"
import "./App.css"

import { Routes, Route, Navigate } from "react-router-dom"

import Menu from "./components/Menu"
import Home from "./containers/Home"
import Books from "./containers/Books"
import Book from "./containers/Book"
import Us from "./containers/Us"
import { AuthPage } from "./auth"
import { AdminPage } from "./admin"
import { SearchPage } from "./pages"

// import useWindowDimensions from './theme/getWindowWidth'

function App() {
     //  const isPortrait = useWindowDimensions()
     const [categorySearch, setCategorySearch] = useState()
     const [scoreSearch, setScoreSearch] = useState()
     const [keywordSearch, setKeywordSearch] = useState()

     return (
          <>
               <Routes>
                    <Route element={<AuthPage />} path='/auth/*' />
                    <Route
                         path='/*'
                         element={
                              <>
                                   <Menu />
                                   <Routes>
                                        <Route
                                             element={
                                                  <Home
                                                       setCategorySearch={setCategorySearch}
                                                       setScoreSearch={setScoreSearch}
                                                  />
                                             }
                                             exact
                                             path='/'
                                        />
                                        <Route
                                             element={
                                                  <Books
                                                       categorySearch={categorySearch}
                                                       setCategorySearch={setCategorySearch}
                                                       scoreSearch={scoreSearch}
                                                       setScoreSearch={setScoreSearch}
                                                       keywordSearch={keywordSearch}
                                                       setKeywordSearch={setKeywordSearch}
                                                  />
                                             }
                                             exact
                                             path='/books'
                                        />
                                        <Route element={<AdminPage />} exact path='/admin/user/*' />
                                        <Route
                                             element={
                                                  <Book
                                                       categorySearch={categorySearch}
                                                       setCategorySearch={setCategorySearch}
                                                       keywordSearch={keywordSearch}
                                                       setKeywordSearch={setKeywordSearch}
                                                  />
                                             }
                                             exact
                                             path='/book/:ISBN'
                                        />
                                        <Route element={<Us />} exact path='/us' />
                                        <Route element={<SearchPage />} path='search' />
                                        <Route element={<Navigate to={"/"} />} path='/*' />
                                   </Routes>
                              </>
                         }
                    />
               </Routes>
               <div></div>
          </>
     )
}

export default App
