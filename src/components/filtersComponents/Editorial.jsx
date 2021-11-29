import React, { useState } from 'react'

// Material UI
import Box from '@mui/material/Box'
import FormControl from '@mui/material/FormControl'
import FormGroup from '@mui/material/FormGroup'
import FormControlLabel from '@mui/material/FormControlLabel'
import Checkbox from '@mui/material/Checkbox'

export default function Editorial() {
    const [state, setState] = useState({
        gilad: true,
        jason: false,
        antoine: false,
        jack: false,
        gilad2: false,
        jason2: false,
        antoine2: false,
        jack2: false,
      })
    
      const handleChange = (event) => {
        setState({
          ...state,
          [event.target.name]: event.target.checked,
        })
      }
    
      const {
        gilad,
        jason,
        antoine,
        jack,
        gilad2,
        jason2,
        antoine2,
        jack2
    } = state

    return (
        <Box sx={{ width: 300 }}>
            <FormControl sx={{ m: 3 }} component="fieldset" variant="standard">
                <FormGroup>
                    <FormControlLabel
                        control={
                        <Checkbox checked={gilad} onChange={handleChange} name="gilad" />
                        }
                        label="Gilad Gray"
                    />
                    <FormControlLabel
                        control={
                        <Checkbox checked={jason} onChange={handleChange} name="jason" />
                        }
                        label="Jason Killian"
                    />
                    <FormControlLabel
                        control={
                        <Checkbox checked={antoine} onChange={handleChange} name="antoine" />
                        }
                        label="Antoine Llorca"
                    />
                    <FormControlLabel
                        control={
                        <Checkbox checked={jack} onChange={handleChange} name="jack" />
                        }
                        label="Jack"
                    />
                    <FormControlLabel
                        control={
                        <Checkbox checked={gilad2} onChange={handleChange} name="gilad2" />
                        }
                        label="Gilad Gray"
                    />
                    <FormControlLabel
                        control={
                        <Checkbox checked={jason2} onChange={handleChange} name="jason2" />
                        }
                        label="Jason Killian"
                    />
                    <FormControlLabel
                        control={
                        <Checkbox checked={antoine2} onChange={handleChange} name="antoine2" />
                        }
                        label="Antoine Llorca"
                    />
                    <FormControlLabel
                        control={
                        <Checkbox checked={jack2} onChange={handleChange} name="jack2" />
                        }
                        label="Jack"
                    />
                </FormGroup>
            </FormControl>
        </Box>
    )
}