import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

/*
PAGES: 
  - Home page
  - Shop catelog
  - Cart

COMPONENTS:
  - App: (1)
    - Home (2)
      - Navbar (5)
      - HomeContent
    - Store: (3)
      - Navbar (5)
      - StoreContent
      - Store Items (8)
        - Store Cards (9)
    - Cart: (4)
      - Navbar (5)
      - CartContents



*/