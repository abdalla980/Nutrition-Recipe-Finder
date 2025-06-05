import Fooditem from "./fooditem.tsx";

function Foodlist({foodData , setFoodId }){
    return(
        <div>
            {foodData.map((food)=>(

<Fooditem  setFoodId={setFoodId} key={food.id}     food={food}/>
                ))}
        </div>
    )
}
export default Foodlist