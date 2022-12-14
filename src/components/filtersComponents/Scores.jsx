import React from 'react'

// Material UI
import Box from '@mui/material/Box'
import FormControl from '@mui/material/FormControl'
import FormGroup from '@mui/material/FormGroup'
import FormControlLabel from '@mui/material/FormControlLabel'
import Checkbox from '@mui/material/Checkbox'

export default function Scores({
    scoresList,
    scoreChecked,
    setScoreChecked
}) {    
    const handleChange = (e) => {
        if (!scoreChecked.includes(e.target.name)) {
            setScoreChecked([
                ...scoreChecked,
                e.target.name
            ])
        } else {
            const isInArray = (element) => element === e.target.name
            const elementIndex = scoreChecked.findIndex(isInArray)
            scoreChecked.splice(elementIndex, 1)
            setScoreChecked([
                ...scoreChecked
            ])
        }
    }

    return (
        <Box sx={{ width: 300 }}>
            <FormControl sx={{ m: 3 }} component="fieldset" variant="standard">
                <FormGroup>
                    {scoresList.map((e, i) => {
                        return (
                            <FormControlLabel
                                key={i}
                                control={
                                <Checkbox checked={scoreChecked.includes(e.name)} onChange={handleChange} name={e.name} />
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