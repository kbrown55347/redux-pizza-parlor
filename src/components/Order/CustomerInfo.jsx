import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

function CustomerInfoForm() {
    const [customerNameInput, setNameInput] = useState('');
    const [customerAddressInput, setAddressInput] = useState('');
    const [customerCityInput, setCityInput] = useState('');
    const [customerZipInput, setZipInput] = useState('');
    const [deliveryType, setDeliveryType] = useState('');

    const dispatch = useDispatch();

    const history = useHistory();

    const onCustomerInfoSubmit = () => {

        
        const customerFormData = {
            customer_name: customerNameInput,
            street_address: customerAddressInput,
            city: customerCityInput,
            zip: customerZipInput,
            type: deliveryType
        }
        console.log('Customer Information Entered:', customerFormData);
        dispatch({
            type: 'ADD_CUSTOMER_INFO',
            payload: customerFormData
        })
        history.push('/checkout');
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
                <input onClick={() => setDeliveryType('Pickup')} type="radio" name="orderType"/>Pickup
                <input onClick={() => setDeliveryType('Delivery')} type="radio" name="orderType"/>Delivery
            </div>
            <button onClick={onCustomerInfoSubmit}>Next</button>

        </form>
    );
}



export default CustomerInfoForm;