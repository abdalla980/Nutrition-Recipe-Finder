import styles from './fooditem.module.css'

function Fooditem({food, setFoodId}){
    return(
        <div className={styles.itemContainer}>
            <img className={styles.itemImg} src={food.image} alt={" "}/>
          <div className={styles.itemContent}>
            <p className={styles.itemName}>{food.title}</p>
          </div>
            <div className={styles.buttonContainer}>
            <button onClick={()=>{console.log(food.id);
            setFoodId(food.id);
            }}  className={styles.itemButton}>View Recipe</button>
            </div>
        </div>
    )
}

export default Fooditem