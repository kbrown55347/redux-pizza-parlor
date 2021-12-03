import axios from "axios";
import React, { useState } from "react";
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import CheckoutItem from "../CheckoutItem/CheckoutItem";

function CheckoutHome() {
    // call the order holder reducer that has the stored information
    // change names when order reducer is named IMPORTANT
    const addRemovePizza = useSelector((store) => store.addRemovePizza);

    const history = useHistory();

    // function to post data to the database
    // clears the cart
    // navigates back to pizza page
    const newOrder = {
        customer_name: addRemovePizza.customer_name, //change values when reducer is made
        street_address: addRemovePizza.street_address,
        city: addRemovePizza.city,
        zip: addRemovePizza.zip,
        total: "27.98",
        // total: addRemovePizza.total,
        type: addRemovePizza.type,
        // pizzas: addRemovePizza.pizzas
        pizzas: [{
            id: "1",
            quantity: "1"
        }, {
            id: "2",
            quantity: "1"
        }]
    }
    const handleCheckout = () => {
        console.log('addRemovePizza', addRemovePizza);
        console.log('newOrder', newOrder);
        axios({
            method: 'POST',
            url: '/api/order',
            data: newOrder
        }).then((res) => {
            dispatchEvent({
                type: '',
                payload: res.data
            })
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
                <h4>For ${addRemovePizza.type}</h4>
                <>{addRemovePizza.customer_name}</><br />
                <>{addRemovePizza.street_address}</><br />
                <>{addRemovePizza.city}, {addRemovePizza.zip}</>
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
                        {newOrder.pizzas.map((pizza, i) => {
                            return <CheckoutItem key={i} pizza={pizza.id} />
                        })}
                    </tbody>
                </table>
            </div>
            <div id="total-checkout">
                <h2>Total: ${newOrder.total}</h2>
                <button onClick={handleCheckout}>CHECKOUT</button>
            </div>
        </div>
    )
}

export default CheckoutHome;