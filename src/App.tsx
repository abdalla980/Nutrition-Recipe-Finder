import Search from "./components/Search.tsx";
import {useState} from "react";
import Foodlist from "./components/foodlist.tsx";
import Nav from "./components/nav.tsx";
import './App.css'
import Container from "./components/container.tsx";
import InnerContainer from "./components/innerContainer.tsx";
import FoodDetails from "./components/fooddetails.tsx";

function App() {
const [foodData,setFoodData]= useState([]);
const [foodId,setFoodId]=useState('716004')
 return (
<div className={"App"}>
    <Nav/>
<Search foodData={foodData} setFoodData={setFoodData} />
    <Container>
        <InnerContainer>
            <Foodlist foodData={foodData} setFoodId={setFoodId} />
        </InnerContainer>
        <InnerContainer>
            <FoodDetails foodId={foodId}/>
        </InnerContainer>
    </Container>

</div>
 )
}

export default App
