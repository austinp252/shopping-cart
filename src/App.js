import React, { useState } from 'react';

import Home from './components/Home/Home';
import Shop from './components/Shop/Shop';
import Cart from './components/Cart/Cart';
import ItemView from './components/ItemView/ItemView';

import Navbar from './components/Navbar/Navbar';

import shopItems from './components/shopItems';

import { BrowserRouter, Switch, Route } from 'react-router-dom';

function App() {
  const [cart, setCart] = useState([]);
  const [total, setTotal] = useState(0.00);

  const appendCart = (e, item) => {
    e.preventDefault();
    //console.log(item);
    setCart(cart.concat(item))
    setTotal(total+item.cost);
  }

  const removeFromCart = (id, cost) => {
    const newCart = cart.filter(item => item.id !== id);
    //console.log('test', cart, newCart);
    setTotal(total-cost);
    setCart(newCart);
  }

  const getItem = (id) => {
    let item = shopItems.filter(item => item.id === id);
    return item[0];
  }

  return (
    <div className='App'>
      <BrowserRouter>
        <Navbar />
        <Switch>
          <Route exact path='/'>
            <Home />
          </Route>
          <Route exact path='/Shop'>
            <Shop shopItems={shopItems} />
          </Route>
          <Route exact path='/Shop/products/:productID'>
            <ItemView getItem={getItem} appendCart={appendCart} />
          </Route>
          <Route exact path='/Cart'>
            <Cart cart={cart} removeFromCart={removeFromCart} total={total}/>
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;