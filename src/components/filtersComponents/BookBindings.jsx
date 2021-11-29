import React, { useState } from 'react'

// Material UI
import Box from '@mui/material/Box'
import FormControl from '@mui/material/FormControl'
import FormGroup from '@mui/material/FormGroup'
import FormControlLabel from '@mui/material/FormControlLabel'
import Checkbox from '@mui/material/Checkbox'

export default function BookBindings() {
    const [state, setState] = useState({
        gilad: true,
        jason: false,
        antoine: false,
        jack: false,
      })
    
      const handleChange = (event) => {
        setState({
          ...state,
          [event.target.name]: event.target.checked,
        })
      }
    
      const { gilad, jason, antoine, jack } = state

    return (
        <Box sx={{ width: 300 }}>
            <FormControl sx={{ m: 3 }} component="fieldset" variant="standard">
                <FormGroup>
                    <FormControlLabel
                        control={
                        <Checkbox checked={gilad} onChange={handleChange} name="gilad" />
                        }
                        label="Cartón / Tradicional"
                    />
                    <FormControlLabel
                        control={
                        <Checkbox checked={jason} onChange={handleChange} name="jason" />
                        }
                        label="Cartón / Acordeón"
                    />
                    <FormControlLabel
                        control={
                        <Checkbox checked={antoine} onChange={handleChange} name="antoine" />
                        }
                        label="Papel / Tapa Dura"
                    />
                    <FormControlLabel
                        control={
                        <Checkbox checked={jack} onChange={handleChange} name="jack" />
                        }
                        label="Papel / Tapa Blanda"
                    />
                </FormGroup>
            </FormControl>
        </Box>
    )
}