import React from 'react'

// Material UI
import Box from '@mui/material/Box'
import FormControl from '@mui/material/FormControl'
import FormGroup from '@mui/material/FormGroup'
import FormControlLabel from '@mui/material/FormControlLabel'
import Checkbox from '@mui/material/Checkbox'

export default function Illustrations({
    illustrationsList,
    ilustrationsChecked,
    setilustrationsChecked
}) {
    const handleChange = (e) => {
        if (!ilustrationsChecked.includes(e.target.name)) {
            setilustrationsChecked([
                ...ilustrationsChecked,
                e.target.name
            ])
        } else {
            const isInArray = (element) => element === e.target.name
            const elementIndex = ilustrationsChecked.findIndex(isInArray)
            ilustrationsChecked.splice(elementIndex, 1)
            setilustrationsChecked([
                ...ilustrationsChecked
            ])
        }
    }
    
    return (
        <Box sx={{ width: 300 }}>
            <FormControl sx={{ m: 3 }} component="fieldset" variant="standard">
                <FormGroup>
                    {illustrationsList.map((e, i) => {
                        return (
                            <FormControlLabel
                                key={i}
                                control={
                                <Checkbox checked={ilustrationsChecked.includes(e.name)} onChange={handleChange} name={e.name} />
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