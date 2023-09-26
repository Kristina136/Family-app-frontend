import { useEffect, useState } from "react";
import { EachRecipe } from "./EachRecipe";
import { RiFindReplaceFill } from "react-icons/ri/";
//import uuid from 'react-uuid';

export const RecipeApi = ({ setTitle, setDescription, setImage, setMyRecipe, collapsed}) => {
  const [input, setInput] = useState("");
  const [word, setWord] = useState("salmon lemon");
  const [recArray, setRecArray] = useState([])



  useEffect(() => {
    const getRec = async () => {
      const rec = await fetch(
        `https://api.edamam.com/api/recipes/v2?type=public&q=${word}&app_id=aa7fc674&app_key=%209f7145c722ecd135f95b26fbaedc8760`
      );
      const result = await rec.json();
      setRecArray(result.hits)
    console.log(result.hits);
    };
    getRec();
  }, [word]);
  const inputRec = (e) => {
    setInput(e.target.value);
  };
  const searchRec = (e) => {
    e.preventDefault()
    setWord(input)
  };


//recArray.map(each=>(each.recipe).id = uuid())
//recArray.map(each=>console.log(each.recipe.id))
  return (
    <div>
      <div className={collapsed ? "marginLeft" : "flex-column each"} >
        <form className="flex-row findInput" onSubmit={searchRec}>
           <input
            value={input}
            onChange={inputRec}
            placeholder="For example: avocado, salmon ..."
          />
          <RiFindReplaceFill onClick={searchRec}  size={45} color="#69696b"/> 
        </form>
        {recArray.map((each, i) =><EachRecipe key={each.recipe.image} each={each}  setTitle={setTitle} setDescription={setDescription} setImage={setImage} setMyRecipe={setMyRecipe}/>)}
      </div>
    </div>
  );
};
