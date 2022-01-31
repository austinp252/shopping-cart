import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { CgMathMinus, CgMathPlus } from "react-icons/cg";
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
                <p className='item-desc'>{item.desc}</p>
                <form onSubmit={(e) => {
                    appendCart(e, {
                        name: item.name,
                        id: item.id,
                        quantity: quantity,
                        cost: quantity * item.price
                    })
                }}>
                    <p>Quantity</p>
                    <div className="quantity">
                        <button onClick={
                            (e) => {
                                e.preventDefault();
                                if (quantity > 0) {
                                    setQuantity(quantity - 1);
                                }
                            }
                        }><CgMathMinus /></button>
                        <input type="text" value={quantity} />
                        <button onClick={(e) => {
                            e.preventDefault();
                            setQuantity(quantity + 1);
                        }}><CgMathPlus /></button>
                    </div>
                    <button type='submit' disabled={
                        quantity > 0 ? false : true
                    }>Add to cart</button>
                </form>
            </div>
        </div>
    )
}

export default ItemView
