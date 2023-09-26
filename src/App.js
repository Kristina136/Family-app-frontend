import { useState } from "react";
import "./App.css";
import { RecipeApi } from "./API/RecipeApi";
import { OwnRecipe } from "./Main/OwnRecipe";
import { BsFillSearchHeartFill } from "react-icons/bs/";
import { FiChevronsLeft } from "react-icons/fi/";

import {
  Sidebar,
  Menu,
  MenuItem
} from "react-pro-sidebar";

function App() {
  const [myRecipe, setMyRecipe] = useState([]);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState(null);
  const [main, setMain] = useState(false);
  const [api, setApi] = useState(false);


  //SIDEBAR
  const [collapsed, setCollapsed] = useState(true);
  const [toggled, setToggled] = useState(false);
  const handleCollapsedChange = () => {
    setCollapsed(!collapsed);
  };
  const handleToggleSidebar = (value) => {
    setToggled(value);
  };

  return (
<div>

<Sidebar 

transitionDuration={800}
        className={collapsed ? "open" : "close"}
        style={{ height: "100%", position: "fixed", backgroundColor:"#ffdfd6"}}
        collapsed={collapsed}
        toggled={toggled}
        handleToggleSidebar={handleToggleSidebar}
        handleCollapsedChange={handleCollapsedChange}
      >
        <div>
          <Menu>
            {collapsed ? (
              <MenuItem icon={<BsFillSearchHeartFill   size={30} color="#69696b" />} onClick={handleCollapsedChange}>
              </MenuItem>
            ) : (
              <MenuItem suffix={<FiChevronsLeft onClick={handleCollapsedChange}   size={30} color="#69696b"/>}>
                <div className="headerOfSiderBar">FIND RECIPE <br/>BY INGREDIENT</div>
              </MenuItem>
            )}
            <hr />
          </Menu>

          <Menu>
           
            <RecipeApi 
                collapsed={collapsed}
                setMain={setMain}
                setTitle={setTitle}
                setDescription={setDescription}
                setImage={setImage}
                setMyRecipe={setMyRecipe}
              />
            {/* <SubMenu defaultOpen label={"Professors"} icon={<RiTeamLine />}>
              <MenuItem icon={<RiUserFollowLine />}>Active </MenuItem>
            </SubMenu> */}
           
          </Menu>
        </div>
      </Sidebar>


      <OwnRecipe
                setApi={setApi}
                title={title}
                setTitle={setTitle}
                description={description}
                setDescription={setDescription}
                image={image}
                setImage={setImage}
                setMyRecipe={setMyRecipe}
                myRecipe={myRecipe}
              />
</div>







  );
}

export default App;
