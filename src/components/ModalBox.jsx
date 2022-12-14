import React, { useState } from 'react'
import closeIcon from '../assets/close-icon.png'

// criteria pics
import one from '../assets/criteriosImages/1.png'
import two from '../assets/criteriosImages/2.png'
import three from '../assets/criteriosImages/3.png'
import four from '../assets/criteriosImages/4.png'
import five from '../assets/criteriosImages/5.png'
import six from '../assets/criteriosImages/6.png'
import seven from '../assets/criteriosImages/7.png'
import eight from '../assets/criteriosImages/8.png'
import nine from '../assets/criteriosImages/9.png'
import ten from '../assets/criteriosImages/10.png'
import eleven from '../assets/criteriosImages/11.png'
import twelve from '../assets/criteriosImages/12.png'
import thirteen from '../assets/criteriosImages/13.png'
import fourteen from '../assets/criteriosImages/14.png'
import fifteen from '../assets/criteriosImages/15.png'
import sixteen from '../assets/criteriosImages/16.png'
import seventeen from '../assets/criteriosImages/17.png'
import eighteen from '../assets/criteriosImages/18.png'
import nineteen from '../assets/criteriosImages/19.png'
import twenty from '../assets/criteriosImages/20.png'
import twentyOne from '../assets/criteriosImages/21.png'

export default function ModalBox({
    showModal,
    criteria
}) {
    const [critIndex, setCritIndex] = useState(0)
    const groups = {
        crit1: [one,two,three],
        crit2: [four,five,six],
        crit3: [seven, eight, nine],
        crit4: [ten,eleven,twelve],
        crit5: [thirteen,fourteen,fifteen],
        crit6: [sixteen,seventeen,eighteen],
        crit7: [nineteen,twenty,twentyOne],
    }
    
    return (
        <div className='modalBox'>
            <img
                onClick={() => showModal()}
                className='closeBtn'
                src={closeIcon} alt='close'
            />
            <div className='modalBoxImages'>
                <img src={groups[criteria][critIndex]} alt="" />
                <div className='flex'>
                    <img onClick={() => setCritIndex(0)} src={groups[criteria][0]} alt="" />
                    <img onClick={() => setCritIndex(1)} src={groups[criteria][1]} alt="" />
                    <img onClick={() => setCritIndex(2)} src={groups[criteria][2]} alt="" />
                </div>
            </div>
        </div>
    )
}