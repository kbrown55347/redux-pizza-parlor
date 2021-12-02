import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import { Provider } from 'react-redux';

// create orders redux
const orders = (state = [], action) => {
    switch (action.type) {
        case 'GET_ORDER':
            console.log('in orders redux', action.payload)
            return action.payload
        default:
            return state
    }
}


// create store
const reduxStore = createStore(
    combineReducers({
        orders
    }),
    applyMiddleware(logger)
);


// add Provider
ReactDOM.render(<Provider store={reduxStore}><App /></Provider>, document.getElementById('root'));
