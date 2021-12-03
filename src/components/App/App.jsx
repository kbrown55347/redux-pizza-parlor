import React, { useState, useEffect } from 'react';
import { HashRouter as Router, Route, Link } from "react-router-dom";
import { useDispatch } from 'react-redux';
import axios from 'axios';
import './App.css';
import GetPizzaList from '../GetPizzaList/GetPizzaList';
import CustomerInfoForm from '../Order/CustomerInfo';
import CheckoutHome from '../CheckoutHome/CheckoutHome';
import GetOrders from './GetOrder/GetOrder.jsx';
import Home from '../Home/Home';

function App() {
  const dispatch = useDispatch();


function getPizza (){
  axios ({
    method: 'GET',
    url: '/api/pizza'
  }).then((response)=>{ 
    dispatch({
      type:'GET_PIZZA',
      payload:response.data
    })
    
  }).catch((error)=>{
    console.log('error IN GET', error);
  });
};

  useEffect(() => {
    getPizza();
  }, [])

  function getPizza() {
    axios({
      method: 'GET',
      url: '/api/pizza'
    }).then((response) => {
      dispatch({
        type: 'GET_PIZZA',
        payload: response.data
      })

    }).catch((error) => {
      console.log('error IN GET', error);
    });
  };




  return (
    <div className='App'>
      <Router>
        <header className='App-header'>
          <h1 className='App-title'>Prime Pizza</h1>
        </header>
        <div>
          <Link to="/">Home</Link>|
          <Link to="/pizza">Pizza</Link>|
          <Link to="/checkout">Checkout</Link>|

          <Link to="/customerInfo">Customer Info</Link>
        </div>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/pizza">
          <GetPizzaList />
        </Route>
        <Route exact path="/admin">
          <GetOrders />
        </Route>
        <Route exact path="/customerInfo">
          <CustomerInfoForm />
        </Route>
        <Route exact path="/checkout">
          <CheckoutHome />
        </Route>
      </Router>
    </div>
  );
}

export default App;
