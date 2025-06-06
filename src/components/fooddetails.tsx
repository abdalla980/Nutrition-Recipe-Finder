import { useEffect, useState } from "react";
import styles from './fooddetails.module.css';
import ItemList from "./itemlist.tsx";

interface InstructionStep {
    number: number;
    step: string;
}

interface AnalyzedInstruction {
    name: string;
    steps: InstructionStep[];
}

interface Food {
    title: string;
    image: string;
    readyInMinutes: number;
    vegan: boolean;
    servings: number;
    pricePerServing: number;
    analyzedInstructions: AnalyzedInstruction[];
}

interface FoodDetailsProps {
    foodId: string;
}

export default function FoodDetails({ foodId }: FoodDetailsProps) {
    const [food, setFood] = useState<Food | null>(null);
    const [isLoading, setIsLoading] = useState(true);
    const URL = `https://api.spoonacular.com/recipes/${foodId}/information`;
    const API_KEY = "946ff805dc364321a3394afb35a6a475";

    useEffect(() => {
        async function fetchFood() {
            const resp = await fetch(`${URL}?apiKey=${API_KEY}`);
            const Data = await resp.json();
            console.log(Data);
            setFood(Data);
            setIsLoading(false);
        }
        fetchFood();
    }, [foodId]);

    if (!food) {
        return <p>Loading...</p>;
    }

    return (
        <div>
            <div className={styles.recipeCard}>
                <h1 className={styles.recipeName}>{food.title}</h1>
                <img className={styles.recipeImage} src={food.image} alt="" />

                <div className={styles.recipeDetails}>
                    <span>⏰ {food.readyInMinutes} Minutes</span>
                    <span>{food.vegan ? " 🥗 Vegan " : " 🥩 Non-Vegan "}</span>
                    <span>Serves {food.servings} Person/s</span>
                    <div>
                        <span>{(food.pricePerServing / 100).toFixed(2)}$ Per Serving</span>
                    </div>
                </div>

                <h1>Ingredients</h1>
                <ItemList food={food} isLoading={isLoading} />

                <h2>Instructions</h2>
                <div className={styles.recipeInstruction}>
                    {isLoading ? (
                        <p>Loading...</p>
                    ) : (
                        food.analyzedInstructions[0]?.steps.map((step) => (
                            <li key={step.number}>{step.step}</li>
                        ))
                    )}
                </div>
            </div>
        </div>
    );
}
