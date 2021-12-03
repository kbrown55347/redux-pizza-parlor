import React from 'react';
import axios from 'axios';
import './App.css';
import { HashRouter as Router, Route, Link } from "react-router-dom";

import CheckoutHome from './CheckoutHome/CheckoutHome';

function App() {

  return (
    <div className='App'>
      <Router>
        <header className='App-header'>
          <h1 className='App-title'>Prime Pizza</h1>
        </header>
        <Link to="/">Select Pizza</Link>|
        <Link to="/checkout">Checkout</Link>
{/*     
        <img src='images/pizza_photo.png' />
        <p>Pizza is great.</p> */}
        <Route exact path="/checkout">
          <CheckoutHome />
        </Route>
      </Router>
    </div>
  );
}

export default App;
