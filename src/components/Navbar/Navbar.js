import React from 'react'

import {Link} from 'react-router-dom';

import './Navbar.css';

function Navbar() {
    return (
        <div className = 'nav'>
            <h1>
                <Link to={'/'}>Home</Link>
            </h1>
            <h1>
                <Link to={'/shop'}>Shop</Link>
            </h1>
            <h1>
                <Link to={'/cart'}>Cart</Link>
            </h1>
        </div>
    )
}

export default Navbar
