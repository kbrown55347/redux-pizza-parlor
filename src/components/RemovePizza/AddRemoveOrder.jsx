import { useDispatch, useSelector } from "react-redux";
import{useState} from 'react';



function AddRemoveOrder () {
    const [addPizzaOrder, setAddPizzaOrder] = useState ('');
    const [removePizzaOrder, setRemovePizzaOrder] = useState('');
    const addRemovePizza = useSelector((store) => store.addRemovePizza);

    const dispatch = useDispatch();

    const addPizza = ()=>{
        dispatch({
            type: 'ADD_TO_ORDER',
            payload: addPizzaOrder
        })
    }
    // const removePizza = () => {
    //     dispatch({
    //         type: 'REMOVE_ORDER',
    //         payload: removePizzaOrder
    //     })
    // }
    return(
        <div>
            
            <button onClick={addPizza}>Add</button>
            {/* <button onClick={removePizza}>Remove</button> */}
        </div>


    
    )
}

export default AddRemoveOrder;