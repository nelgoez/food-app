import React from "react";
import { Route } from "react-router-dom";
import Diets from "./components/Diets/Diets";
import RecipeDetails from "./components/RecipeDetails/RecipeDetails";
import NavBar  from "./components/NavBar/NavBar";
import Button from "./components/Button/Button";
import AddRecipe from './components/AddRecipe/AddRecipe'
import List from "./components/List/List";



function App() {
  return (
    <React.Fragment>
      <NavBar />
      <Route exact path= '/'component={ Button }/>
      <Route exact path="/home" component={ List } />
      <Route path="/addRecipe" component={ AddRecipe } />
      <Route path="/types" component={ Diets } />
      <Route path="/recipe/:id" component={ RecipeDetails } />
    </React.Fragment>
  );
}

export default App;
