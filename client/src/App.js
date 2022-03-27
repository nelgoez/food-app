import React from "react";
import { Route } from "react-router-dom";
import Diets from "./components/Diets/Diets";
import RecipeDetails from "./components/RecipeDetails/RecipeDetails";
import NavBar  from "./components/NavBar/NavBar";
import  Searcher from './components/Searcher/Searcher'
import Button from "./components/Button/Button";
import AddRecipe from './components/AddRecipe/AddRecipe'



function App() {
  return (
    <React.Fragment>
      <NavBar />
      <Route exact path= '/'component={ Button }/>
      <Route exact path="/home" component={ Searcher } />
      <Route path="/addRecipe" component={ AddRecipe } />
      <Route path="/types" component={ Diets } />
      <Route path="/recipe/:id" component={ RecipeDetails } />
    </React.Fragment>
  );
}

export default App;
