import React, { useState } from 'react';
import { useParams } from 'react-router-dom';

import './ItemView.css';

function ItemView(props) {
    const { productID } = useParams();
    const { getItem, appendCart } = props;
    const [quantity, setQuantity] = useState(0);
    const item = getItem(productID);
    return (
        <div className='item-view'>
            <h1>{item.name}</h1>
            <div className="content">
                <img src={item.img} alt="" />
                <p>{item.desc}</p>
                <form onSubmit={(e) => {
                    appendCart(e, {
                        name: item.name,
                        quantity: quantity,
                        cost: quantity * item.price
                    })
                }}>
                    <div className="quantity">
                        <button onClick={
                            (e) => {
                                e.preventDefault();
                                if (quantity > 0) {
                                    setQuantity(quantity - 1);
                                }
                            }
                        }>-</button>
                        <input type="text" value={quantity} />
                        <button onClick={(e) => {
                            e.preventDefault();
                            setQuantity(quantity + 1);
                        }}>+</button>
                    </div>
                    <button type='submit'>Add to cart</button>
                </form>
            </div>
        </div>
    )
}

export default ItemView
