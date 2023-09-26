import { useEffect, useState } from "react";
import { addRecipe, getAllRecipes } from "../FetchApp";
import Swal from 'sweetalert2'
import { BsHandThumbsUpFill } from "react-icons/bs/";

export const EachRecipe = ({
  each,
  setTitle,
  setDescription,
  setImage,
  setMyRecipe,
}) => {
  useEffect(() => {
    getAllRecipes(setMyRecipe);
  }, [setMyRecipe]);
  let eachLabel = each.recipe.label;
  let eachDec = each.recipe.url;
  let eachImg = each.recipe.image;
const [added, setEdded] = useState(false)

  const handleAdd = () => {
    addRecipe(
      eachLabel,
      setTitle,
      eachDec,
      setDescription,
      eachImg,
      setImage,
      setMyRecipe
    );
    setEdded(true);
    Swal.fire({
        position: "center",
        icon: "success",
        title: "Your recipe has been added",
        showConfirmButton: false,
        timer: 1500,
      });
  };

  return (
    <div className="eachRecipeApi">
      <h3>{each.recipe.label}</h3>
      <a className="openRecipe" href={each.recipe.url}>
        OPEN RECIPE
      </a>
      <img className="imgApi" src={each.recipe.image} width="200px" alt="alt" />
      <button className= {added ? "addedBtn" : "AddEditBtn"} onClick={() => handleAdd()}>
        {added ? <BsHandThumbsUpFill  size={25} color="#69696b"/>  :"Add to family recipes"
       }
      </button>
    </div>
  );
};
