
function GetPizzaItem({ pizza }){
    return(
        <>
            <> {pizza.name} 
               {pizza.description}
               {pizza.price} </>
            <img src={pizza.image_path}/>
        </>
    );
};

export default GetPizzaItem;