import React from 'react'

// Material UI
import Box from '@mui/material/Box'
import FormControl from '@mui/material/FormControl'
import FormGroup from '@mui/material/FormGroup'
import FormControlLabel from '@mui/material/FormControlLabel'
import Checkbox from '@mui/material/Checkbox'

export default function BookBindings({
    bookBindingsList,
    bookBindingsChecked,
    setBookBindingsChecked
}) {
    // const [checked, setChecked] = useState([])
    
    const handleChange = (e) => {
        if (!bookBindingsChecked.includes(e.target.name)) {
            setBookBindingsChecked([
                ...bookBindingsChecked,
                e.target.name
            ])
        } else {
            const isInArray = (element) => element === e.target.name
            const elementIndex = bookBindingsChecked.findIndex(isInArray)
            bookBindingsChecked.splice(elementIndex, 1)
            setBookBindingsChecked([
                ...bookBindingsChecked
            ])
        }
    }

    return (
        <Box sx={{ width: 300 }}>
            <FormControl sx={{ m: 3 }} component="fieldset" variant="standard">
                <FormGroup>
                    {bookBindingsList.map((e, i) => {
                        return (
                            <FormControlLabel
                                key={i}
                                control={
                                <Checkbox checked={bookBindingsChecked.includes(e.name)} onChange={handleChange} name={e.name} />
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