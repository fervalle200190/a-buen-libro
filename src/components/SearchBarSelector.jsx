import React, { useEffect, useRef, useState } from "react"
import ArrowDown from "../assets/arrow_back_ios.svg"

export const SearchBarSelector = ({ list, tagSelected, onTagSelectedChanged }) => {
     const [showList, setShowList] = useState(false)
     const option = useRef()
     const onShowList = () => setShowList(true)
     const onCloseList = () => setShowList(false)

     const onOptionClick = (op) => {
          onTagSelectedChanged(op)
          onCloseList()
     }

     const tagName =
          tagSelected.label.length > 7 ? tagSelected.label.slice(0, 6) + "..." : tagSelected.label

     useEffect(() => {
          const checkClick = (e) => {
               if (!option.current.contains(e.target)) {
                    onCloseList()
               }
          }
          document.addEventListener("click", checkClick)
          return () => document.removeEventListener("click", checkClick)
     }, [option])

     return (
          <div className='inner-select' ref={option}>
               <div className='inner-select-label' onClick={onShowList}>
                    <div className='border-select'>
                         <p className='search-selector'>{tagName}</p>
                         <img src={ArrowDown} alt='show options' className='arrow-down-select' />
                    </div>
               </div>
               <div className={`list-search-selector ${showList ? "" : "hidden-selector"}`}>
                    {list.map((option) => (
                         <div
                              key={option.label}
                              onClick={() => onOptionClick(option)}
                              className={"list-option"}
                         >
                              {option.label}
                         </div>
                    ))}
               </div>
          </div>
     )
}
