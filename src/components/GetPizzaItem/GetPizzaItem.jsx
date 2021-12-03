import './GetPizzaItem.css'
function GetPizzaItem({ pizza }){
    return(
        <div>
            <div>{pizza.name} </div>
            <div>{pizza.description}</div>
            <div>{pizza.price} </div>
            <img className="img"src={pizza.image_path}/>
            <button>Remove</button>
        </div >
    );
};

export default GetPizzaItem;