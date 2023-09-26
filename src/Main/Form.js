import { GiMeal } from "react-icons/gi/";
import { TbFileDescription } from "react-icons/tb/";
import { BsCameraFill } from "react-icons/bs/";
import { useState } from "react";
import Swal from 'sweetalert2'



export const Form = ({
  openForm,
  title,
  setTitle,
  description,
  setDescription,
  setImage,
  editing,
  recipeID,
  editRecipe,
  image,
  setMyRecipe,
  setEditing,
  addRecipe,
  setOpenForm
}) => {

  const [nameFile, setNameFile] = useState("Keine ausgewält");

  const handleAdd = () => {
    addRecipe(
      title,
      setTitle,
      description,
      setDescription,
      image,
      setImage,
      setMyRecipe
    );
    Swal.fire({
      position: "center",
      icon: "success",
      title: "Your recipe has been added",
      showConfirmButton: false,
      timer: 1500,
    });
    setOpenForm(false)
  };

  const handleEdit = () => {
    editRecipe(
      recipeID,
      title,
      setTitle,
      description,
      setDescription,
      image,
      setImage,
      setMyRecipe,
      setEditing
    );
    Swal.fire({
      position: "center",
      icon: "success",
      title: "Your recipe has been edited",
      showConfirmButton: false,
      timer: 1500,
    });
    setOpenForm(false)
  };

  return (
    <div>
      {openForm && (
        <div className="form">
          <div className="flex-row formImgInput">
            <GiMeal size={30} color="#69696b" />
            <input
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Name of recipe"
            />
          </div>
          <div className="flex-row formImgInput">
            <TbFileDescription size={30} color="#69696b" />
            <textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Description of recipe"
            />
          </div>
          <div className="flex-row formImgInput">
            <label htmlFor="inputTag">
              <input
                id="inputTag"
                type="file"
                accept="image/jpeg, image/png, image/jpg"
                onChange={(e) => {
                  setImage(URL.createObjectURL(e.target.files[0]));
                  setNameFile(e.target.files[0].name);
                }}
              />
              <div className="flex-row">
                <BsCameraFill size={40} color="#69696b" />
                <span className="nameFile">{nameFile}</span>
              </div>
            </label>
          </div>
          <button className="AddEditBtn"
            disabled={!title}
            onClick={editing ? () => handleEdit() : () => handleAdd()}
          >
            {editing ? "Edit your recipe" : "Add your recipe"}
          </button>
        </div>
      )}
    </div>
  );
};
