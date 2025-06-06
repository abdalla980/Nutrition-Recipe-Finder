import Fooditem from "./fooditem.tsx";

function Foodlist({foodData , setFoodId }:any){
    return(
        <div>
            {foodData.map((food:any):any=>(

<Fooditem  setFoodId={setFoodId} key={food.id}     food={food}/>
                ))}
        </div>
    )
}
export default Foodlist