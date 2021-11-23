import React from 'react'

// Footer
import Footer from '../components/Footer'
// Images
import header from '../assets/us-header.jpg'
import profilePic from '../assets/profile-pic.png'
    // criteria covers
import one from '../assets/1.jpg'
import two from '../assets/2.jpg'
import three from '../assets/3.jpg'
import four from '../assets/4.jpg'
import five from '../assets/5.jpg'
import six from '../assets/6.jpg'
import seven from '../assets/7.jpg'
    // how icons
import how1 from '../assets/how1.png'
import how2 from '../assets/how2.png'
import how3 from '../assets/how3.png'
import how4 from '../assets/how4.png'
import how5 from '../assets/how5.png'
import how6 from '../assets/how6.png'
import how7 from '../assets/how7.png'
// Style
import '../styles/main.css'
// Data
import steps from '../libs/stepsTexts'
import hows from '../libs/how'

export default function Us () {
    const bkgColors = [
        "#EDEDED",
        "#005293",
        "#EDEDED",
        "#FF5E00",
        "#EDEDED",
        "#53D192",
        "#EDEDED",
    ]
    const coverImgs = [one,two,three,four,five,six,seven]
    const howIcons = [how1, how2, how3, how4, how5, how5, how6, how7]
    let count = 1

    const renderSteps = () => {
        let step
        step = bkgColors.map((e, i) => {
            let section = 
            <div
                className="criterio-container"
                key={e+i}
                style={{backgroundColor: e}}
            >   
                <div className="flex">
                    <div className="criterio-texts">
                        <div className="criterio-titles">
                            <h3
                                style={{
                                    color: e === "#EDEDED" ? "#005293" : "#fff",
                                    WebkitTextFillColor: "transparent",
                                    WebkitTextStrokeWidth: 1,
                                    WebkitTextStrokeColor: e === "#EDEDED" ? "#005293" : "#fff"
                                }}
                            >
                                {count++}
                            </h3>
                            <h2 style={{ color: e === "#EDEDED" ? "#005293" : "#fff"}}>
                                {steps[i].title}
                            </h2>
                        </div>
                        <p style={{color: e === "#EDEDED" ? "#707070" : "#fff"}}>
                            {steps[i].text}
                        </p>
                    </div>
                    <div className="criterio-imgs">
                        <img src={coverImgs[i]} />
                        <button>
                            Ver ejemplos
                        </button>
                    </div>
                </div>
            </div>

            return section
        })

        return step
    }

    const renderHows = () => {
        let how
        how = howIcons.map((e, i) => {
            let section
            section = 
            <div key={i} className="flex how-container">
                <img src={e} alt="" />
                <div className="">
                    <h5>{hows[i].title}</h5>
                    <p>{hows[i].text}</p>
                </div>
                <div className="white-line"></div>
            </div>
            return section
        })
        return how
    }

    return (
            <div>
                <header
                    className="us-header flex jus-algn-center bkg-img"
                    style={{backgroundImage: `url(${header})`}}
                >
                    <div className="container">
                        <h2 className="titles">¿Qué hacemos?</h2>
                        <p>En “A buen libro” reseñamos las obras de literatura infantil y juvenil que están disponibles en bibliotecas y librerías en Chile. Nuestra misión es colaborar en el trabajo de quienes fomentan la lectura entre niños, niñas y jóvenes, como profesores, bibliotecarios, y apoderados. Con ese fin, clasificamos y criticamos las obras según criterios y categorías que facilitan su búsqueda. Nuestra visión es que, gracias a “A buen libro”, todos los niños, niñas y jóvenes puedan recibir recomendaciones de libros que despierten en ellos el hábito y el amor por la lectura. Queremos recomendar los buenos libros para forjar mejores lectores.</p>
                    </div>
                </header>
                <div className="container us-subtext">
                    <p>Para criticar las obras, leemos cuidadosamente cada una y usamos criterios objetivos de calidad para juzgar su mérito literario y su aporte al campo de la literatura infantil y juvenil. Nuestro uso de los criterios es flexible: algunos criterios no son aplicables a todos las obras, por eso hay libros que calificamos como extraordinarios a pesar de que no cumplen todos los criterios.</p>
                </div>
                {renderSteps()}
                <div className="hows">
                    <div className="container">
                        <h2 className="titles">¿Cómo lo hacemos?</h2>
                        <div className="flex">
                            {renderHows()}
                        </div>
                    </div>
                </div>
                <div className="us">
                    <div className="container">
                        <h2 className="titles">¿Quiénes somos?</h2>
                        <p>Somos un equipo de profesores y estudiantes de la Facultad de Educación de la Universidad del Desarrollo. Nos reúne una pasión por la literatura infantil y juvenil y el rigor de la vida académica.</p>
                        <div className="flex">
                            <div className="profile flex jus-algn-center">
                                <img src={profilePic} alt="" />
                                <p>Montserrat Cubillos</p>
                            </div>
                            <div className="us-text">
                                <p>El equipo lo dirige Montserrat Cubillos, profesora de nuestra facultad. Montserrat es Licenciada en Artes y Humanidades, con menciones en Literatura y Teología. Fue profesora de lenguaje y comunicación de estudiantes de enseñanza media en un liceo en Santiago. Luego, estudió un Magíster en Educación en la Universidad de Harvard, y un Doctorado en Educación en la Universidad de Maryland, College Park. Montserrat imparte la cátedra en literatura infantil y juvenil desde el 2017, primero en Estados Unidos y ahora en nuestra universidad.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <Footer />
            </div>
    )
}