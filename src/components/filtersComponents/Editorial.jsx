import React from 'react'

// Material UI
import Box from '@mui/material/Box'
import FormControl from '@mui/material/FormControl'
import FormGroup from '@mui/material/FormGroup'
import FormControlLabel from '@mui/material/FormControlLabel'
import Checkbox from '@mui/material/Checkbox'

export default function Editorial({
    editorialsList,
    editorialsChecked,
    setEditorialsChecked
}) {
    const handleChange = (e) => {
        if (!editorialsChecked.includes(e.target.name)) {
            setEditorialsChecked([
                ...editorialsChecked,
                e.target.name
            ])
        } else {
            const isInArray = (element) => element === e.target.name
            const elementIndex = editorialsChecked.findIndex(isInArray)
            editorialsChecked.splice(elementIndex, 1)
            setEditorialsChecked([
                ...editorialsChecked
            ])
        }
    }

    return (
        <Box sx={{ width: 300 }}>
            <FormControl sx={{ m: 3 }} component="fieldset" variant="standard">
            <FormGroup>
                    {editorialsList.map((e, i) => {
                        return (
                            <FormControlLabel
                                key={i}
                                control={
                                <Checkbox checked={editorialsChecked.includes(e.name)} onChange={handleChange} name={e.name} />
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