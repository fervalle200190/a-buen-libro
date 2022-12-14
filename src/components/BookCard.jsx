import React from "react"
import { useNavigate } from "react-router-dom"
import { ReactComponent as Aceptable } from "../assets/0.svg"
import { ReactComponent as Bueno } from "../assets/1.svg"
import { ReactComponent as MuyBueno } from "../assets/2.svg"
import { ReactComponent as Extraordinario } from "../assets/3.svg"
import plusIcon from "../assets/plus-icon.png"

export default function BookCard({ imgSrc, ISBN, authors, bookName, score }) {
     const navigate = useNavigate()
     // const backUrl = process.env.REACT_APP_BACK_URL
     return (
          <div className='book-card' onClick={() => navigate("/book/" + ISBN)}>
               <div className='viewMore'>
                    <img src={plusIcon} alt='' />
               </div>
               <img src={"https://www.abuenlibro.cl" + imgSrc} />
               <div className='book-card-text'>
                    {authors.length > 0 &&
                         authors.map((e) => {
                              return (
                                   <h3 style={{ height: 35 }} key={e.name}>
                                        {e.name} {e.lastName ? e.lastName : ""}
                                   </h3>
                              )
                         })}
                    <h2 style={{ height: 38 }}>{bookName}</h2>
                    <div className='btn-book-container'>
                         <a
                              href={`https://www.buscalibre.cl/libros/search?q=${ISBN}`}
                              style={{ textDecoration: "none" }}
                              target='_blank'
                              rel='noreferrer'
                         >
                              <button className='buy-book-btn' onClick={(e) => e.stopPropagation()}>
                                   Comprar
                              </button>
                         </a>
                    </div>
                    <div className='card-score'>
                         <p>
                              {score === "Extraordinario" ? (
                                   <Extraordinario
                                        style={{
                                             width: 30,
                                             verticalAlign: "middle",
                                             marginRight: 10,
                                        }}
                                   />
                              ) : score === "Muy bueno" ? (
                                   <MuyBueno
                                        style={{
                                             width: 30,
                                             verticalAlign: "middle",
                                             marginRight: 10,
                                        }}
                                   />
                              ) : score === "Bueno" ? (
                                   <Bueno
                                        style={{
                                             width: 30,
                                             verticalAlign: "middle",
                                             marginRight: 10,
                                        }}
                                   />
                              ) : (
                                   <Aceptable
                                        style={{
                                             width: 30,
                                             verticalAlign: "middle",
                                             marginRight: 10,
                                        }}
                                   />
                              )}
                              {score}
                         </p>
                    </div>
               </div>
          </div>
     )
}
