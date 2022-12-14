import React from 'react'

// Material UI
import Box from '@mui/material/Box'
// import Slider from '@mui/material/Slider'
import TextField from '@mui/material/TextField'

export default function Years({
    // yearValues,
    setYearValues,
    from,
    setFrom,
    until,
    setUntil
}) {
    // let year = new Date().getFullYear()
    // const [from, setFrom] = useState(0)
    // const [until, setUntil] = useState(year)
    
    let years = [Number(from), Number(until)]

    // const handleChange = (event, newValue) => {
    //     setYears(newValue)
    // }
    
    return (
        <Box
            // sx={{ width: 300 }}
            className='slider'
            autoComplete="off"
            component="form"
        >
            <TextField label="Desde" variant="standard" value={years[0]} onChange={(e) => setFrom(e.target.value)} onBlur={() => setYearValues(years)}/>
            <TextField label="Hasta" variant="standard" value={years[1]} onChange={(e) => setUntil(e.target.value)} onBlur={() => setYearValues(years)}/>
            {/* <Slider
                getAriaLabel={() => 'Año de publicación'}
                value={yearValues}
                onChange={handleChange}
                valueLabelDisplay="auto"
                step={10}
                marks
                min={1920}
                max={year}
            />
            <p>Entre: {yearValues[0]}-{yearValues[1]}</p> */}
        </Box>
    )
}