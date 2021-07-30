import React from 'react'

import { Link } from 'react-router-dom';

import './Navbar.css';
import { FaShoppingCart } from 'react-icons/fa';

function Navbar() {
    return (
        <div className='nav'>
            <h1>
                <Link className='link home-link' to={'/'}>MICK'S SPORTING GOODS</Link>
            </h1>
            <h1>
                <Link className='link shop-link' to={'/shop'}>Products</Link>
            </h1>
            <h1>
                <Link className='link cart-link' to={'/cart'}><FaShoppingCart /></Link>
            </h1>
        </div>
    )
}

export default Navbar
