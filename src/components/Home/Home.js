import React from 'react'

import { Link } from 'react-router-dom';

import './Home.css';

function Home() {
    return (
        <div className='home-container'>
            <div className='home'></div>
            <div className="home-content">
                <h1 className='title'>MICK'S SPORTING GOODS</h1>
                <p>Love yourself, start to succeed today</p>
                <Link className='link-home' to={'/shop'}>Proceed to Shop</Link>
            </div>
        </div>
    )
}

export default Home
