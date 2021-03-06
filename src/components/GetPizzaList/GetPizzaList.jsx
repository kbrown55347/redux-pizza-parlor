import { useSelector } from 'react-redux';
import GetPizzaItem from '../GetPizzaItem/GetPizzaItem'

function GetPizzaList (){
    const pizzaList = useSelector(store => store.getPizzaReducer)
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