import React from 'react';
import { NavLink } from 'react-router-dom';

import './Navbar.css';

export default function NavBar() {
    return (
        <header className="nav-header">
            <nav className='nav'>
                <ul className="nav-links">
                    <li className="list-item">
                        <NavLink exact to="/" className='a' activeClassName='active' >Home</NavLink>
                    </li>
                    <li className="list-item">
                        <NavLink exact to="/types" className='a' activeClassName='active' >Diet Types</NavLink>
                    </li>
                    <li className="list-item">
                        <NavLink exact to="/addRecipe" className='a' activeClassName='active' >Add Recipe</NavLink>
                    </li>
                </ul>
            </nav>
        </header>
    )
}