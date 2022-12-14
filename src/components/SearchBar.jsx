import React from 'react'
// import Box from '@mui/material/Box'
import TextField from '@mui/material/TextField'
import Autocomplete from '@mui/material/Autocomplete'

import { Link } from 'react-router-dom'

export default function SearchBar({
    data
}) {

    const booksData = data.booksSearchBar
    return (
        <Autocomplete
            id="searchBook"
            className='searchBar'
            sx={{ width: 300 }}
            options={booksData}
            autoHighlight
            getOptionLabel={(option) => option.name}
            renderOption={(props, option) => (
                <Link component="li" sx={{ '& > img': { mr: 2, flexShrink: 0 } }} {...props}  to={'/book/'+option.ISBN}>
                    {option.name}
                </Link>
            )}
            renderInput={(params) => (
            <TextField
                {...params}
                label="Busca un libro"
                inputProps={{
                ...params.inputProps
                }}
            />
            )}
        />
    )
}