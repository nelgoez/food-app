import React from "react";
import { Route } from "react-router-dom";
import Diets from "./components/Diets/Diets";
import RecipeDetails from "./components/RecipeDetails/RecipeDetails";
import NavBar  from "./components/NavBar/NavBar";
import Home from "./components/Home/Home";
import AddRecipe from './components/AddRecipe/AddRecipe'
import Background from './components/Background/Background'

function App() {
  return (
    <React.Fragment>
      <Background />
      <NavBar />
      <Route exact path="/" component={ Home }/>
      <Route path="/addRecipe" component={ AddRecipe } />
      <Route path="/types" component={ Diets } />
      <Route path="/recipe/:id" component={ RecipeDetails } />
    </React.Fragment>
  );
}

export default App;
