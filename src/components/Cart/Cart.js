import React from 'react'

function Cart(props) {
    const { cart, removeFromCart } = props;
    return (
        <div>
            <h1>Cart</h1>
            {
                cart.map((item) => {
                    return (
                        <div>
                            <hr />
                            {item.name}
                            {item.quantity}
                            {item.cost}
                            <button onClick={() => removeFromCart(item.id)}>Remove Item</button>
                        </div>
                    )
                })
            }
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
