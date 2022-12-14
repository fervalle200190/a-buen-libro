import React from 'react'

// Material UI
import Box from '@mui/material/Box'
import FormControl from '@mui/material/FormControl'
import FormGroup from '@mui/material/FormGroup'
import FormControlLabel from '@mui/material/FormControlLabel'
import Checkbox from '@mui/material/Checkbox'

export default function Genres({
    genresList,
    genreChecked,
    setGenreChecked
}) {
    const handleChange = (e) => {
        if (!genreChecked.includes(e.target.name)) {
            setGenreChecked([
                ...genreChecked,
                e.target.name
            ])
        } else {
            const isInArray = (element) => element === e.target.name
            const elementIndex = genreChecked.findIndex(isInArray)
            genreChecked.splice(elementIndex, 1)
            setGenreChecked([
                ...genreChecked
            ])
        }
    }
    
    return (
        <Box sx={{ width: 300 }}>
            <FormControl sx={{ m: 3 }} component="fieldset" variant="standard">
                <FormGroup>
                    {genresList.map((e, i) => {
                        return (
                            <FormControlLabel
                                key={i}
                                control={
                                <Checkbox checked={genreChecked.includes(e.name)} onChange={handleChange} name={e.name} />
                                }
                                label={e.name}
                            />
                        )
                    })}
                </FormGroup>
            </FormControl>
        </Box>
    )
}