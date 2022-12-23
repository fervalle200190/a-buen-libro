import { useQuery } from "@apollo/client"
import React, { useState } from "react"
import { useNavigate } from "react-router-dom"
import { useDebounce } from "use-debounce"
import { ReactComponent as Lupa } from "../assets/lupa.svg"
import { searchBooks } from "../graphql/queries"
import { tagSelectors } from "../utils"
import { SearchBarSelector } from "./SearchBarSelector"
import { SearchResults } from "./SearchResults"

export const MenuSearchBar = () => {
     const [tagSelected, setTagSelected] = useState(tagSelectors[0])
     const [searchValue, setSearchValue] = useState("")
     const [value] = useDebounce(searchValue, 500)
     const navigate = useNavigate()

     const searchQuery = useQuery(searchBooks, {
          variables: tagSelected.fn(value),
     })

     const onTagSelectedChanged = (op) => setTagSelected(op)

     const onSubmit = (e)=> {
          e.preventDefault()
          navigate(`/search?q=${searchValue.toLowerCase().trim()}&label=${tagSelected.label}`)
     }
     return (
          <div className='main-search-container'>
               <form className='input-search-container' onSubmit={onSubmit}>
                    <Lupa className='menu-lupa' />
                    <input
                         type='search'
                         className='input-search-menu'
                         placeholder='Busca un libro'
                         value={searchValue}
                         onChange={(e) => setSearchValue(e.target.value)}
                    />
                    <SearchBarSelector
                         list={tagSelectors}
                         onTagSelectedChanged={onTagSelectedChanged}
                         tagSelected={tagSelected}
                    />
                    <SearchResults searchQuery={searchQuery} value={value} />
               </form>
          </div>
     )
}
