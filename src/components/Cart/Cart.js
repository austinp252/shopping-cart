import React, { useState } from 'react'
import './Cart.css';

function Cart(props) {
    const { cart, removeFromCart } = props;

    return (
        <div className='cart'>
            <h1>Cart</h1>
            <table>
                <tr>
                    <th>Name</th>
                    <th>Price</th>
                    <th>Quantity</th>
                </tr>
                {
                    cart.map((item) => {
                        return (
                            <tr className='cart-item'>
                                <td>{item.name}</td>
                                <td>{item.cost}</td>
                                <td>{item.quantity}</td>
                                <button onClick={() => removeFromCart(item.id)}>Remove Item</button>
                            </tr>
                        )
                    })
                }
            </table>
            <div className="total">Order Total:</div>
            <button>Proceed To Checkout</button>
        </div>
    )
}

export default Cart

/*
{
    name: '',
    quantity: 0,
    cost: 0
}
*/
