import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import React, { useEffect } from 'react';
import OrderItem from '../OrderItem/OrderItem.jsx';

function GetOrders() {

    const dispatch = useDispatch();

    const orders = useSelector((store) => store.orders);
    // create function to create order list to render to DOM
    // iterate through orders array and return each item in table row

    useEffect(() => {
        // console.log('in useEffect')
        getOrdersFromDatabase();
    }, []);
    
    const getOrdersFromDatabase = () => {
    axios({
        method: 'GET',
        url: '/api/order'
    })
        .then((res) => {
            const ordersFromDatabase = res.data;
            console.log('in GET orders route', ordersFromDatabase);
            dispatch({
                type: 'GET_ORDER',
                payload: ordersFromDatabase
            })
    })
    } // end getOrdersFromDatabase

    return (
        <div>
            <table>
                <tbody>
                    {orders.map((order) => {
                        return <OrderItem key={order.id} order={order} />; 
                    })}
                </tbody>
            </table>
        </div>
    )
};

export default GetOrders;