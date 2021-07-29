import React from 'react';

import Home from './components/Home/Home';
import Shop from './components/Shop/Shop';
import Cart from './components/Cart/Cart';

import Navbar from './components/Navbar/Navbar';

import {BrowserRouter, Switch, Route} from 'react-router-dom';

function App() {
  return (
    <div className = 'App'>
      <BrowserRouter>
        <Navbar />
        <Switch>
          <Route exact path='/' component={Home}/>
          <Route exact path='/Shop' component={Shop}/>
          <Route exact path='/Cart' component={Cart}/>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
