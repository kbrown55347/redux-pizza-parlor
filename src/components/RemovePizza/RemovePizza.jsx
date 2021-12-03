import { useSelector } from 'react-redux';
function RemovePizza () {
    const deletePizza = useSelector(store => store.orders)
    return(
    <div>
        {deletePizza.map((remove)=>{
            return <button></button>
        })}
    </div>
    )
}

export default RemovePizza;