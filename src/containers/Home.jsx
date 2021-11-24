import React from 'react'

import '../styles/main.css'
import heroImg from '../assets/home-hero.jpg'
import time from '../assets/time.png'
import eye from '../assets/eye.png'
import balance from '../assets/balance.png'
import kid from '../assets/kid-reading.jpg'

// Components
import Footer from '../components/Footer'

export default function Home () {

    const categories = [
        "0-2 años",
        "3-5 años",
        "6-7 años",
        "8-9 años",
        "10-11 años",
        "12-14 años",
        "15-18 años",
        "Sobre 18 años",
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

    const categoryButton = () => {
        let buttons = 
        categories.map((e, i) => {
            let button = 
                <button
                    key={e}
                    className="category-btn"
                    style={{backgroundColor: colors[i]}}
                >
                    {e}
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
                            <h2 className="outline white absolute">Encuentra tu libro</h2>
                            <h2 className="titles">
                                Entérate de los buenos libros y forja mejores lectores
                            </h2>
                        </div>
                        <div className="flex space-between">
                            {categoryButton()}
                        </div>
                    </div>
                    <img className="home-hero-img" src={heroImg} alt="Abuelo leyendo con nieto" />
                </div>
            </header>
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