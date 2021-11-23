import React from 'react'
import './App.css'

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import Menu from './components/Menu'
import Home from './containers/Home'
import Books from './containers/Books'
import Book from './containers/Book'
import Us from './containers/Us'

// import useWindowDimensions from './theme/getWindowWidth'

function App() {

  // const isPortrait = useWindowDimensions()

  return (
    <Router>
      <Menu />
      <div>
        <Routes>
          <Route element={<Home />} exact path='/' />
          <Route element={<Books />} exact path='/books' />
          {/* <Route element={<Book />} exact path='/book/:name' /> */}
          <Route element={<Book />} exact path='/book/' />
          <Route element={<Us />} exact path='/us' />
        </Routes>
      </div>
    </Router>
  )
}

export default App
