import React from 'react'
import Arrow from '../assets/Arrow.svg'
import './Accordion.scss'

const Accordion = ({ active, title, text, onToggle }) => {
    return (
        <li className={`accordion ${active ? 'active' : ''}`}>
            <div className='accordion-item' onClick={onToggle}>
                <span className='accordion-item-title'>
                    {title}
                </span>
                <img src={Arrow} className='accordion-item-svg' />
            </div>
            <div className='accordion-item-content'>
                <span className='accordion-item-content-text'>
                    {text}
                </span>
            </div>
        </li>
    )
}

export default Accordion