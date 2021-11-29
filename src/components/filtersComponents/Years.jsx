import React, { useState } from 'react'

// Material UI
import Box from '@mui/material/Box'
import Slider from '@mui/material/Slider'

export default function Years() {
    function valuetext(value) {
        return `${value}°C`
    }

    const [value, setValue] = useState([1930, 2000])

    const handleChange = (event, newValue) => {
      setValue(newValue)
    }
    return (
        <Box sx={{ width: 300 }}>
            <Slider
                getAriaLabel={() => 'Temperature range'}
                value={value}
                onChange={handleChange}
                valueLabelDisplay="auto"
                getAriaValueText={valuetext}
                step={10}
                marks
                min={1920}
                max={2021}
            />
            <p>Entre: {value[0]}-{value[1]}</p>
        </Box>
    )
}