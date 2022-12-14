import React from 'react'

// Material UI
import Box from '@mui/material/Box'
import FormControl from '@mui/material/FormControl'
import FormGroup from '@mui/material/FormGroup'
import FormControlLabel from '@mui/material/FormControlLabel'
import Checkbox from '@mui/material/Checkbox'

export default function Keywords({
    keywordsList,
    keyWordsChecked,
    setKeyWordsChecked
}) {    
    const handleChange = (e) => {
        if (!keyWordsChecked.includes(e.target.name)) {
            setKeyWordsChecked([
                ...keyWordsChecked,
                e.target.name
            ])
        } else {
            const isInArray = (element) => element === e.target.name
            const elementIndex = keyWordsChecked.findIndex(isInArray)
            keyWordsChecked.splice(elementIndex, 1)
            setKeyWordsChecked([
                ...keyWordsChecked
            ])
        }
    }

    return (
        <Box sx={{ width: 300 }}>
            <FormControl sx={{ m: 3 }} component="fieldset" variant="standard">
                <FormGroup>
                    {keywordsList.map((e, i) => {
                        return (
                            <FormControlLabel
                                key={i}
                                control={
                                <Checkbox checked={keyWordsChecked.includes(e)} onChange={handleChange} name={e} />
                                }
                                className="keywords-label"
                                label={e}
                            />
                        )
                    })}
                </FormGroup>
            </FormControl>
        </Box>
    )
}