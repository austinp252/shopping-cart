import React from 'react'

import {Link} from 'react-router-dom';

import './Home.css';

function Home() {
    return (
        <div className='home'>
            <h1>Home</h1>
            <h3>Placeholder text</h3>
            <h1>
                <Link to={'/shop'}>Shop</Link>
            </h1>
        </div>
    )
}

export default Home
