import { useSelector } from 'react-redux';
import GetPizzaItem from '../GetPizzaItem/GetPizzaItem'

function GetPizzaList (){
    const pizzaList = useSelector(store => store.getPizzaReducer)
    // do I call the orders reducer here? 
    const deletePizza = useSelector(store => store.orders)
    return(
        <>
        <section>
            <div>
                
                {pizzaList.map((pizza, index) =>{
                    return <GetPizzaItem key={index} pizza={pizza}/>
                })}
            </div>
        </section>
</>
    )
}

export default GetPizzaList;