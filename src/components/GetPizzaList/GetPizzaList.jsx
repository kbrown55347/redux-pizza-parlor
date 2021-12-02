import { useSelector } from 'react-redux'

function GetPizzaList (){
    const pizzaList = useSelector(store => store.getPizzaReducer)
    return(
        <section>
            <ul>
                {pizzaList.map((pizza, index) =>
                    <li key={index}> 
                    {pizza.name} 
                    {pizza.description}
                    {pizza.price}
                    {pizza.image_path} </li>
                )}
            </ul>
        </section>

    )
}

export default GetPizzaList;