import React, { useState } from 'react'

// Material UI
import Accordion from '@mui/material/Accordion'
import AccordionDetails from '@mui/material/AccordionDetails'
import AccordionSummary from '@mui/material/AccordionSummary'
import Typography from '@mui/material/Typography'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'

// Components
import Years from './filtersComponents/Years'
import BookBindings from './filtersComponents/BookBindings'
import Editorial from './filtersComponents/Editorial'
import Age from './filtersComponents/Age'

// Style
import '../styles/main.css'

export default function Filters() {

    const [expanded, setExpanded] = useState(false)

    const handleChange = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false)
    }

    return (
        <div className="filters-container">
            <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
                <AccordionSummary
                expandIcon={<ExpandMoreIcon className="expand-icon" />}
                aria-controls="panel1bh-content"
                id="panel1bh-header"
                >
                    <Typography sx={{ width: '33%', flexShrink: 0 }}>
                        Año
                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Years />
                </AccordionDetails>
            </Accordion>
            <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
                <AccordionSummary
                expandIcon={<ExpandMoreIcon className="expand-icon" />}
                aria-controls="panel2bh-content"
                id="panel2bh-header"
                >
                <Typography sx={{ width: '33%', flexShrink: 0 }}>Encuadernación</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <BookBindings />
                </AccordionDetails>
            </Accordion>
            <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
                <AccordionSummary
                expandIcon={<ExpandMoreIcon className="expand-icon" />}
                aria-controls="panel3bh-content"
                id="panel3bh-header"
                >
                <Typography sx={{ width: '33%', flexShrink: 0 }}>
                    Editorial
                </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Editorial />
                </AccordionDetails>
            </Accordion>
            <Accordion expanded={expanded === 'panel4'} onChange={handleChange('panel4')}>
                <AccordionSummary
                expandIcon={<ExpandMoreIcon className="expand-icon" />}
                aria-controls="panel4bh-content"
                id="panel4bh-header"
                >
                <Typography sx={{ width: '33%', flexShrink: 0 }}>Edad</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Age />
                </AccordionDetails>
            </Accordion>
            <Accordion expanded={expanded === 'panel5'} onChange={handleChange('panel5')}>
                <AccordionSummary
                expandIcon={<ExpandMoreIcon className="expand-icon" />}
                aria-controls="panel4bh-content"
                id="panel4bh-header"
                >
                <Typography sx={{ width: '33%', flexShrink: 0 }}>Ilustraciones</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Age />
                </AccordionDetails>
            </Accordion>
            <Accordion expanded={expanded === 'panel6'} onChange={handleChange('panel6')}>
                <AccordionSummary
                expandIcon={<ExpandMoreIcon className="expand-icon" />}
                aria-controls="panel4bh-content"
                id="panel4bh-header"
                >
                <Typography sx={{ width: '33%', flexShrink: 0 }}>Género literario</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Age />
                </AccordionDetails>
            </Accordion>
            <Accordion expanded={expanded === 'panel7'} onChange={handleChange('panel7')}>
                <AccordionSummary
                expandIcon={<ExpandMoreIcon className="expand-icon" />}
                aria-controls="panel4bh-content"
                id="panel4bh-header"
                >
                <Typography sx={{ width: '33%', flexShrink: 0 }}>Palabras clave</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Age />
                </AccordionDetails>
            </Accordion>
            <Accordion expanded={expanded === 'panel8'} onChange={handleChange('panel8')}>
                <AccordionSummary
                expandIcon={<ExpandMoreIcon className="expand-icon" />}
                aria-controls="panel4bh-content"
                id="panel4bh-header"
                >
                <Typography sx={{ width: '33%', flexShrink: 0 }}>Calificación</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Age />
                </AccordionDetails>
            </Accordion>
        </div>
    )
}