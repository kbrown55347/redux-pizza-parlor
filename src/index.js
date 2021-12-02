import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import { Provider } from 'react-redux';

// create order redux
const order = (state = [], action) => {
    switch (action.type) {
        case 'GET_ORDER':
            console.log('in order redux', action.payload)
            return action.payload
        default:
            return state
    }
}


// create store
const reduxStore = createStore(
    combineReducers({
        order
    }),
    applyMiddleware(logger)
);


// add Provider
ReactDOM.render(<Provider store={reduxStore}><App /></Provider>, document.getElementById('root'));
