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
            <button className='boton' onClick={handleClick}>Home</button>
        </div>
    )
}
