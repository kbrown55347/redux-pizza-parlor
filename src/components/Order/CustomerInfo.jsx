import { useState } from 'react';
import { useDispatch } from 'react-redux';

function CustomerInfoForm() {
    const [customerNameInput, setNameInput] = useState('');
    const [customerAddressInput, setAddressInput] = useState('');
    const [customerCityInput, setCityInput] = useState('');
    const [customerZipInput, setZipInput] = useState('');

    const dispatch = useDispatch();



    const onCustomerInfoSubmit = () => {
    console.log('Customer Information Entered:',);
    const customerFormData = {
        customer_name: customerNameInput,
        street_address: customerAddressInput,
        city: customerCityInput,
        zip: customerZipInput
    }

    dispatch({
    type: 'ADD_Customer Info',
    payload: customerFormData
    })
};

return (

        <form>
            <h2> Prime Pizza</h2>
            <h3> Total:0 </h3>

        <label>
            Step 2: Customer Information
        </label>
        <div>
        <input
        value={customerNameInput}
        onChange={(event) => { setNameInput(event.target.value) }}
        placeholder="Name" />
        <input
        value={customerAddressInput}
        onChange={(event) => { setAddressInput(event.target.value) }}
        placeholder="Address" />
        <input
        value={customerCityInput}
        onChange={(event) => { setCityInput(event.target.value) }}
        placeholder="City" />
        <input
        value={customerZipInput}
        onChange={(event) => { setZipInput(event.target.value) }}
        placeholder="Zip" />
    </div>
    <div className= "radioButtons">
        <button type= "radio">Pickup</button>
        <button type= "radio">Delivery</button>
        </div>


    <button onClick={onCustomerInfoSubmit}>Next</button>

    </form>
);
}

 

export default CustomerInfoForm;