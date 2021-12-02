import axios from 'axios';
import { useDispatch } from 'react-redux';

function GetOrder() {

    const dispatch = useDispatch();

    axios({
        method: 'GET',
        url: '/api/order'
    })
        .then((res) => {
        const order = res.data;
        console.log('in GET order route', order);
        dispatch({
            type: 'GET_ORDER',
            payload: order
        })
    })
};

export default GetOrder;