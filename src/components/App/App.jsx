import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import axios from 'axios';
import './App.css';
import GetPizzaList from '../GetPizzaList/GetPizzaList';

import GetOrders from './GetOrder/GetOrder.jsx'

function App() {
  const dispatch = useDispatch();
useEffect(()=>{
  getPizza();
}, [])

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

  return (
    <div className='App'>
      <header className='App-header'>
        <h1 className='App-title'>Prime Pizza</h1>
      </header>
  
      <img src='images/pizza_photo.png' />
      <p>Pizza is great.</p>
      <GetPizzaList/>
      <GetOrders />
  
    </div>
  );
}

export default App;
