import React, { useState, useEffect } from 'react'
import { useQuery } from '@apollo/client'
import { getFilters } from '../graphql/queries'

// Material UI
import Accordion from '@mui/material/Accordion'
import AccordionDetails from '@mui/material/AccordionDetails'
import AccordionSummary from '@mui/material/AccordionSummary'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'

// Components
import Years from './filtersComponents/Years'
import BookBindings from './filtersComponents/BookBindings'
import Editorial from './filtersComponents/Editorial'
import Age from './filtersComponents/Age'
import Illustrations from './filtersComponents/Illustrations'
import Genres from './filtersComponents/Genres'
import Keywords from './filtersComponents/Keywords'
import Scores from './filtersComponents/Scores'

// Style
import '../styles/main.css'

export default function Filters({
    categorySearch,
    setCategorySearch,
    scoreSearch,
    setScoreSearch,
    filterSearch,
    bookBindingsChecked,
    setBookBindingsChecked,
    ilustrationsChecked,
    setilustrationsChecked,
    genreChecked,
    setGenreChecked,
    keyWordsChecked,
    setKeyWordsChecked,
    scoreChecked,
    setScoreChecked,
    editorialsChecked,
    setEditorialsChecked,
    ageRanges,
    setAgeRanges,
    yearValues,
    setYearValues,
    masterFilters,
    clearFilters,
    from,
    setFrom,
    until,
    setUntil,
    keywordSearch,
    setKeywordSearch
}) {
    const [expanded, setExpanded] = useState(false)

    const { loading, error, data } = useQuery(getFilters)

    useEffect(() => {
        if (categorySearch) {
            setExpanded('panel4')
            setCategorySearch()
        }
    }, [categorySearch])

    
    useEffect(() => {
        if (scoreSearch) {
            setExpanded('panel8')
            setScoreSearch()
        }
    }, [scoreSearch])
    
    useEffect(() => {
        if (keywordSearch) {
            setExpanded('panel7')
            setKeywordSearch()
        }
    }, [keywordSearch])
    // let year = new Date().getFullYear()
    // const [from, setFrom] = useState(0)
    // const [until, setUntil] = useState(year)

    if (loading) return 'Loading...'
    if (error) return `Error! ${error.message}`

    const filters = data

    let bookBindingsList = filters.getBookBindings
    let genresList = filters.getGenres
    let illustrationsList = filters.getIllustrations
    let keywordsList = filters.getKeyWords

    let sorting = ["Extraordinario", "Muy bueno", "Bueno", "Aceptable", "No recomendable"]
    let scoresList = filters.getScores
    scoresList = scoresList.slice().sort((a,b) => sorting.indexOf(a.name) - sorting.indexOf(b.name))

    let editorialsList = filters.getEditorials
    let ageRangesList = filters.getAgeRanges
    
    let ageRangesListCopy = ageRangesList.map((e) => {
        return e.name
    })
    let sorted = [
        "0 a 2 años",
        "3 a 5 años",
        "6 a 7 años",
        "8 a 9 años",
        "10 a 11 años",
        "12 a 14 años",
        "15 a 18 años",
        "Sobre 18 años",
    ]
    ageRangesListCopy.sort(function(a,b) {
        return sorted.indexOf(a) - sorted.indexOf(b)
    })

    let keywordsListCopy = keywordsList.map((e) => e.name).sort(function(a, b) {
        return a.localeCompare(b)
    })

    const handleChange = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false)
    }

    return (
        <div className="filters-container">
            <Accordion expanded={expanded === 'panel8'} onChange={handleChange('panel8')}>
                <AccordionSummary
                expandIcon={<ExpandMoreIcon className="expand-icon" />}
                aria-controls="panel4bh-content"
                id="panel4bh-header"
                >
                <Typography sx={{ width: '33%', flexShrink: 0 }}>Calificación</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Scores
                        scoresList={scoresList}
                        scoreChecked={scoreChecked}
                        setScoreChecked={setScoreChecked}
                    />
                </AccordionDetails>
            </Accordion>
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
                    <Years
                        yearValues={yearValues}
                        setYearValues={setYearValues}
                        from={from}
                        setFrom={setFrom}
                        until={until}
                        setUntil={setUntil}
                    />
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
                    <BookBindings
                        bookBindingsList={bookBindingsList}
                        bookBindingsChecked={bookBindingsChecked}
                        setBookBindingsChecked={setBookBindingsChecked}
                    />
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
                    <Editorial
                        editorialsChecked={editorialsChecked}
                        setEditorialsChecked={setEditorialsChecked}
                        editorialsList={editorialsList}
                    />
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
                    <Age
                        ageRanges={ageRanges}
                        setAgeRanges={setAgeRanges}
                        ageRangesList={ageRangesListCopy}
                    />
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
                    <Illustrations
                        illustrationsList={illustrationsList}
                        ilustrationsChecked={ilustrationsChecked}
                        setilustrationsChecked={setilustrationsChecked}
                    />
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
                    <Genres
                        genresList={genresList}
                        genreChecked={genreChecked}
                        setGenreChecked={setGenreChecked}
                    />
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
                    <Keywords
                        keywordsList={keywordsListCopy}
                        keyWordsChecked={keyWordsChecked}
                        setKeyWordsChecked={setKeyWordsChecked}
                    />
                </AccordionDetails>
            </Accordion>
            <Button
                onClick={
                    () => {
                        filterSearch({variables: masterFilters, fetchPolicy: 'network-only'})
                        // setCategorySearch()
                    }
                }
                className="filter-btn"
            >
                Aplicar filtros
            </Button>
            <Button
                onClick={
                    () => {
                        clearFilters()
                        // setCategorySearch()
                    }
                }
                className="filter-btn"
            >
                Limpiar filtros
            </Button>
        </div>
    )
}