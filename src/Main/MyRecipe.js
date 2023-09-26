import React from "react";
import { AiOutlineDelete } from "react-icons/ai/";
import { AiOutlineEdit } from "react-icons/ai/";

export const MyRecipe = ({
  text,
  description,
  image,
  _id,
  setMyRecipe,
  deleteRecipe,
  setTitle,
  updatingInInput,
}) => {
  return (
    <div className="eachOfAllRecipes flex-column ">
      <h3>{text}</h3>
      <a className={description.includes("http") ? "openRecipe" : "link"} href={description}>{description.includes("http") ? "OPEN RECIPE" : description}</a>
      <div>
        <img src={image} width="200px" alt="alt" className="img"/>
      </div>
      <div>
        <AiOutlineDelete  size={30} color="#69696b" onClick={() => 
          deleteRecipe(_id, setMyRecipe)}/>
        
        <AiOutlineEdit  size={30} color="#69696b" onClick={() =>
            updatingInInput(_id, text, setTitle, description, image)}/>
       
      </div>
    </div>
  );
};
