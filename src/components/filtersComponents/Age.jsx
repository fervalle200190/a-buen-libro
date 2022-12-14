import React from 'react'

// Material UI
import Box from '@mui/material/Box'
import FormControl from '@mui/material/FormControl'
import FormGroup from '@mui/material/FormGroup'
import FormControlLabel from '@mui/material/FormControlLabel'
import Checkbox from '@mui/material/Checkbox'

export default function BookBindings({
    ageRanges,
    setAgeRanges,
    ageRangesList
}) {
    // const [checked, setChecked] = useState([])
    
    const handleChange = (e) => {
        if (!ageRanges.includes(e.target.name)) {
            setAgeRanges([
                ...ageRanges,
                e.target.name
            ])
        } else {
            const isInArray = (element) => element === e.target.name
            const elementIndex = ageRanges.findIndex(isInArray)
            ageRanges.splice(elementIndex, 1)
            setAgeRanges([
                ...ageRanges
            ])
        }
    }

    return (
        <Box sx={{ width: 300 }}>
            <FormControl sx={{ m: 3 }} component="fieldset" variant="standard">
                <FormGroup>
                    {ageRangesList.map((e, i) => {
                        return (
                            <FormControlLabel
                                key={i}
                                control={
                                <Checkbox checked={ageRanges.includes(e)} onChange={handleChange} name={e} />
                                }
                                label={e}
                            />
                        )
                    })}
                </FormGroup>
            </FormControl>
        </Box>
    )
}