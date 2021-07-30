import React, { useState, useEffect } from 'react'

import { Link } from 'react-router-dom';

import './Shop.css';

function Shop(props) {
    const { shopItems } = props;
    const [selectedItems, setSelectedItems] = useState(shopItems); //will be init in useEffect
    const [selectedTag, setSelectedTag] = useState('');

    useEffect(() => {
        if (selectedTag === '') {
            setSelectedItems(shopItems);
        } else {
            setSelectedItems(shopItems.filter(item => item.tag === selectedTag));
        }
    }, [selectedTag]);


    return (
        <div className='shop'>
            <h1>Shop</h1>
            <h2>Showing: {selectedTag === '' ? 'All' : selectedTag}</h2>
            <div className="shop-content">
                <div className="filter-tags">
                    <h2 className = {selectedTag === '' ? 'active' : ''} onClick={() => { setSelectedTag('') }}>All</h2>
                    <h2 className = {selectedTag === 'Weights' ? 'active' : ''} onClick={() => { setSelectedTag('Weights') }}>Weights</h2>
                    <h2 className = {selectedTag === 'Apperal' ? 'active' : ''} onClick={() => { setSelectedTag('Apperal') }}>Apperal</h2>
                    <h2 className = {selectedTag === 'Equipment' ? 'active' : ''} onClick={() => { setSelectedTag('Equipment') }}>Equipment</h2>
                </div>
                <div className="display-items">
                    {
                        selectedItems.map((item) => { 
                            return (
                                <Link to={`/Shop/products/${item.id}`} className="item">
                                    <img src={item.img} alt="" />
                                    <div>{item.name}</div>
                                    <div>${item.price}</div>
                                </Link>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default Shop;

/*
useEffect to rerender if tags are changed
*/
