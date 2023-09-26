import { useEffect, useState } from "react";
import { addRecipe, getAllRecipes, deleteRecipe, editRecipe } from "../FetchApp";
import { MyRecipe } from "./MyRecipe";
import { SiReacthookform } from "react-icons/si/";
import { FiChevronsLeft } from "react-icons/fi/";
import { Form } from "./Form";

export const OwnRecipe = ({
  title,
  setTitle,
  description,
  setDescription,
  image,
  setImage,
  setMyRecipe,
  myRecipe,
}) => {
  const [editing, setEditing] = useState(false);
  const [recipeID, setRecipeId] = useState("");
  const [openForm, setOpenForm] = useState(false);


  useEffect(() => {
    getAllRecipes(setMyRecipe);
  }, [setMyRecipe]);

  const updatingInInput = (_id, title, setTitle, description, image) => {
    setOpenForm(!openForm);
    setEditing(true);
    setTitle(title);
    setDescription(description);
    setRecipeId(_id);
    setImage(image);
  };

  return (
    <div className="marginLeft">
        <button className="openFormBtn" onClick={() => setOpenForm(!openForm)}>
         <SiReacthookform/> Open Form to create your recipe <FiChevronsLeft className={ openForm ? "transformUp" : "transformDown"}  size={30} color="#69696b"/>
        </button>
     
     <Form openForm={openForm}
     title={title} 
     setTitle={setTitle}
      description={description}
     setDescription={setDescription}
      setImage={setImage}
      editing={editing}
      recipeID={recipeID}
      editRecipe={editRecipe}
      image={image}
      setMyRecipe={setMyRecipe}
      setEditing={setEditing}
       addRecipe={addRecipe}
       setOpenForm={setOpenForm}
     />
<h1>Your favorite family recipes</h1>
      <div className="recipeContainer">
        {myRecipe.map((recipe) => (
          <MyRecipe
            text={recipe.title}
            description={recipe.description}
            image={recipe.image}
            key={recipe._id}
            _id={recipe._id}
            setMyRecipe={setMyRecipe}
            deleteRecipe={deleteRecipe}
            setTitle={setTitle}
            updatingInInput={updatingInInput}
          />
        ))}
      </div>
    </div>
  );
};
