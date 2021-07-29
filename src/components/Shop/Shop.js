import React, {useState, useEffect} from 'react'

import shopItems from '../shopItems';

import './Shop.css';

function Shop() {
    const [selectedItems, setSelectedItems] = useState(shopItems); //will be init in useEffect
    const [selectedTag, setSelectedTag] = useState('');

    useEffect( () => {
        if(selectedTag === '') {
            setSelectedItems(shopItems);
        } else {
            setSelectedItems(shopItems.filter(item => item.tag === selectedTag));
        }
    }, [selectedTag]);


    return (
        <div className='shop'>
            <h1>Shop</h1>
            <div className="shop-content">
                <div className="filter-tags">
                    <h2 onClick = {() => {setSelectedTag('')}}>All</h2>
                    <h2 onClick = {() => {setSelectedTag('weights')}}>Weights</h2>
                    <h2 onClick = {() => {setSelectedTag('apperal')}}>Apperal</h2>
                    <h2 onClick = {() => {setSelectedTag('equipment')}}>Equipment</h2>
                </div>
                <div className="display-items">
                    {
                        selectedItems.map((item) => {
                            return(
                                <div className="item">
                                    {item.name}
                                </div>
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
