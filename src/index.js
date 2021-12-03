import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import logger from 'redux-logger';

//Redux
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';

//This will be the GET_PIZZA reducer:
const getPizzaReducer = (state = [], action) =>{
    if (action.type === 'GET_PIZZA'){
        console.log(action);
        return action.payload;
    }
    return state;
}
const orders = (state = [], action) => {
    switch (action.type) {
        case 'GET_ORDER':
            console.log('in orders redux', action.payload)
            return action.payload
        default:
            return state
    }
}
const addRemovePizza = (state = [], action) =>{
    switch (action.type) {
        case 'ADD_TO_ORDER':
            return action.payload
        case 'REMOVE_ORDER':
            return action.payload
        default:
            return state 
        
    }
};


//This is the Store for the reducers 
const storeInstance = createStore(
    combineReducers({
        getPizzaReducer,
        orders,
        addRemovePizza
    }),
    applyMiddleware(logger),
);

ReactDOM.render(<Provider store = {storeInstance}><App /></Provider>, document.getElementById('root'));

