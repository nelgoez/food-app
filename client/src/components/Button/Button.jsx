import React, { useState } from 'react'
import { Redirect } from 'react-router';
import './Button.css'

export default function Button() {

    const [ref, setRef] = useState('');
    const [nav, setNav] = useState(false)

    const handleClick = () => {
        setRef('/home');
        setNav(true);
    }

    if (nav) return <Redirect to={ref} />
    
    return (
        <div className='btn'>
            <div className='hero-content'>
                <h1 className='hero-title'>Recipe Finder</h1>
                <p className='hero-subtitle'>
                    Discover thousands of recipes from around the world<br />
                    Search by ingredients, explore diet types, and save your favorites
                </p>
                <button className='boton' onClick={handleClick}>Start Cooking →</button>
            </div>
        </div>
    )
}
