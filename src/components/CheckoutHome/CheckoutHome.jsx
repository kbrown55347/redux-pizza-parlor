import axios from "axios";
import React, { useState } from "react";
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import CheckoutItem from "../CheckoutItem/CheckoutItem";

function CheckoutHome() {
    // call the order holder reducer that has the stored information
    // change names when order reducer is named IMPORTANT
    // const orderReducer = useSelector((store) => store.orderReducer);
    const history = useHistory();
    
    const testOrder = {
        customer_name: "Donatello",
        street_address: "20 W 34th St",
        city: "New York",
        zip: "10001",
        total: "27.98",
        type: "Pickup",
        pizzas: [{
            id: "1",
            quantity: "1"
        }, {
            id: "2",
            quantity: "1"
        }]
    }
    // function to post data to the database
    // clears the cart
    // navigates back to pizza page
    const handleCheckout = () => {
        // const newOrder = {
        //     customer_name: orderReducer.customer_name, //change values when reducer is made
        //     street_address: orderReducer.street_address,
        //     city: orderReducer.city,
        //     zip: orderReducer.zip,
        //     total: orderReducer.total,
        //     type: orderReducer.type,
        //     pizzas: orderReducer.pizzas
        // }
        axios({
            method: 'POST',
            url: '/api/order',
            data: testOrder
        }).then((res) => {
            //   dispatchEvent({
            //       type: '',
            //       payload: res.data
            //   })
            alert('Thank you for your order!');
            history.push('/');
        }).catch((err) => {
            console.error('POST checkout error', err)
        })
    }

    return (
        <div>
            <h3>Step 3: Checkout</h3>
            <div id="customerInfo">
                <h4>For {testOrder.type}</h4>
                <>{testOrder.customer_name}</><br />
                <>{testOrder.street_address}</><br />
                <>{testOrder.city}, {testOrder.zip}</>
            </div>
            <div>
                <table>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Cost</th>
                        </tr>
                    </thead>
                    <tbody>
                        {testOrder.pizzas.map((pizza, i) => {
                            return <CheckoutItem key={i} pizza={pizza.id}/>
                        })}   
                    </tbody>
                </table>
            </div>
            <div id="total-checkout">
                <h2>Total: ${testOrder.total}</h2>
                <button onClick={handleCheckout}>CHECKOUT</button>
            </div>
        </div>
    )
}

export default CheckoutHome;