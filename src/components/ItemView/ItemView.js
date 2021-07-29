import React from 'react';
import { useParams } from 'react-router-dom';

import './ItemView.css';

function ItemView(props) {
    const { productID } = useParams();
    const { getItem, appendCart } = props;

    const item = getItem(productID);
    console.log(item);
    return (
        <div className='item-view'>
            <h1>{item.name}</h1>
            <div className="content">
                <img src={item.img} alt="" />
                <p>{item.desc}</p>
                <button onClick={() => appendCart(item)}>Add to cart</button>
            </div>
        </div>
    )
}

export default ItemView
