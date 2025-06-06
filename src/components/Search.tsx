import {useEffect, useState} from "react";
import styles from './search.module.css'

const URL = "https://api.spoonacular.com/recipes/complexSearch"
const API_KEY = "946ff805dc364321a3394afb35a6a475"



function Search({setFoodData}:any){
    const [query,setQuery]=useState("")
    useEffect(() => {
        async function fetchFood(){
const resp =   await fetch(`${URL}?query=${query}&apiKey=${API_KEY}`)
       const data = await resp.json()
            setFoodData(data.results)
        } fetchFood()
    }, [query]);
   return(
           <div className={styles.Searchcontainer}>
       <input
           className={styles.input}
           value={query}
           onChange={(e:any)=>setQuery(e.target.value)}
           type={"text"}/>

       </div>
   )

}
export default Search