import React from "react"
import { Link } from "react-router-dom"

export const ResultItem = ({closeResults, ISBN, name, imageOne}) => {
     return (
          <Link to={`/book/${ISBN}`} onClick={closeResults}>
               <div className={"item-result"}>
                    <img
                         src={`https://www.abuenlibro.cl${imageOne}`}
                         alt={name}
                         className='item-result-img'
                    />
                    <p className='book-result-name'>{name}</p>
               </div>
          </Link>
     )
}
