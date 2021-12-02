import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';

function GetOrder() {

    const dispatch = useDispatch();

    const order = useSelector((store) => store.order);

    axios({
        method: 'GET',
        url: '/api/order'
    })
        .then((res) => {
        const orderFromDatabase = res.data;
        console.log('in GET order route', orderFromDatabase);
        dispatch({
            type: 'GET_ORDER',
            payload: orderFromDatabase
        })
    })
};

export default GetOrder;