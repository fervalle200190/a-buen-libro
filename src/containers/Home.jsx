import React from 'react'
import { useNavigate } from 'react-router-dom'


import '../styles/main.css'
import heroImg from '../assets/home-hero.jpg'
import homeAges from '../assets/home-2.jpg'
import time from '../assets/time.png'
import eye from '../assets/eye.png'
import balance from '../assets/balance.png'
import kid from '../assets/kid-reading.jpg'

// Components
import Footer from '../components/Footer'

export default function Home ({
    setCategorySearch,
    setScoreSearch
}) {
    let navigate = useNavigate()
    let categories = [
        "0 a 2 años",
        "3 a 5 años",
        "6 a 7 años",
        "8 a 9 años",
        "10 a 11 años",
        "12 a 14 años",
        "15 a 18 años",
        "Sobre 18 años",
    ]

    let scoresLabels = [
        "Libros extraordinarios",
        "Libros muy buenos",
        "Libros buenos",
        "Libros aceptables",
    ]

    let scores = [
        "Extraordinario",
        "Muy bueno",
        "Bueno",
        "Aceptable",
    ]
 
    const colors = [
        "#00609E",
        "#4F8DD1",
        "#0A9F64",
        "#52CF90",
        "#C42800",
        "#FE8F3C",
        "#751CCE",
        "#AF73EB"
    ]

    const scoreColors = [
        "#FFBA36",
        "#FE8F3C",
        "#FE4F3C",
        "#C42800",
        "#A2A2A2",
        "#00609E",
        "#4F8DD1",
        "#0A9F64",
        "#52CF90",
    ]

    const categoryButton = () => {
        let buttons = 
        categories.map((e, i) => {
            let button = 
                    <button
                        key={e}
                        className="category-btn"
                        style={{backgroundColor: colors[i]}}
                        onClick={() => {
                            setCategorySearch(e)
                            navigate("/books")
                        }}
                    >
                        {e}
                    </button>
            return button
        })
        return buttons
    }

    const scoreButton = () => {
        let buttons = 
        scores.map((e, i) => {
            let button = 
                    <button
                        key={e}
                        className="score-btn"
                        style={{backgroundColor: scoreColors[i]}}
                        onClick={() => {
                            setScoreSearch(e)
                            navigate("/books")
                        }}
                    >
                        {scoresLabels[i]}
                    </button>
            return button
        })
        return buttons
    }
    
    return (
        <React.Fragment>
            <header className="home-header full-width">
                <div className="container">
                    <div className="home-hero-info black-bkg flex jus-algn-center white">
                        <div className="relative">
                            <h2 className="outline white absolute titlesChico"></h2>
                            <h2 className="titles">
                                Entérate de los buenos libros y forja mejores lectores
                            </h2>
                        </div>
                        <div style={{height: '40px'}}></div>
                        <div className="flex space-between score-btn-container">
                            {scoreButton()}
                        </div>
                    </div>
                    <img className="home-hero-img" src={heroImg} alt="Abuelo leyendo con nieto" />
                </div>
            </header>
            <section className="section black-bkg left-padding mot score-section">
                <div className="flex">
                    <div className="motivation-texts">
                        <h2 className="titles white">
                            Encuentra libros según la edad recomendada de los lectores
                        </h2>
                        <div style={{height: '40px'}}></div>
                        <div className="flex space-between">
                            {categoryButton()}
                        </div>
                    </div>
                    <img className="ages-img" src={homeAges} alt="Niño leyendo" />
                </div>
            </section>
            <section className="section black-bkg left-padding mot">
                    <div className="flex">
                        <div className="motivation-texts">
                            <h2 className="titles white">
                                ¿Por qué es importante forjar lectores motivados?
                            </h2>
                            <div className="flex jus-algn-center motivation">
                                <div className="flex jus-algn-center column white center-text">
                                    <img src={time} alt="" />
                                    <p>Porque la motivación lectora predice frecuencia de lectura</p>
                                </div>
                                <div className="flex jus-algn-center column white center-text">
                                    <img src={eye} alt="" />
                                    <p>Porque la motivación lectora predice comprensión de lectura</p>
                                </div>
                                <div className="flex jus-algn-center column white center-text">
                                    <img src={balance} alt="" />
                                    <p>Porque  la motivación lectora puede mitigar el efecto que la pobreza tiene sobre el desempeño académico</p>
                                </div>
                            </div>
                        </div>
                        <img src={kid} alt="" />
                    </div>
            </section>
            <Footer />
        </React.Fragment>
    )
}