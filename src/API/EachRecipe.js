import { useEffect } from "react";
import { addRecipe, getAllRecipes } from "../FetchApp";

export const EachRecipe=({each,setTitle, setDescription, setImage, setMyRecipe})=>{
    useEffect(() => {
        getAllRecipes(setMyRecipe);
      }, []);
let eachLabel= each.recipe.label
let eachDec= each.recipe.url
let eachImg= each.recipe.image


    return(<div className="">
<p>{each.recipe.label}</p>
<a href={each.recipe.url}>Open recipe</a>
<img src={each.recipe.image} width='200px'/>

<button onClick={() => addRecipe(eachLabel,  setTitle, eachDec, setDescription, eachImg, setImage, setMyRecipe)}>Add to family recipes</button>
    </div>)
}