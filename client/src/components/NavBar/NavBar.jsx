import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import Searcher from '../Searcher/Searcher';
import './Navbar.css';

export default function NavBar() {

    const location = useLocation().pathname

    return (
        <header className="nav-header">
            <nav className='nav'>
                <ul className="nav-links">
                    <li className="list-item">
                        <NavLink exact to="/home" className='a' activeClassName='active' >Home</NavLink>
                    </li>
                    <li className="list-item">
                        <NavLink exact to="/types" className='a' activeClassName='active' >Diet Types</NavLink>
                    </li>
                    <li className="list-item">
                        <NavLink exact to="/addRecipe" className='a' activeClassName='active' >Add Recipe</NavLink>
                    </li>
                    <li className="search">
                        {location === '/home' && <Searcher />}
                    </li>
                </ul>
            </nav>
        </header>
    )
}