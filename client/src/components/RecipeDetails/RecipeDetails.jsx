import React from 'react';
//import ReactHtmlParser from 'react-html-parser'
import { connect } from 'react-redux';
import { getRecipeDetails } from '../../actions';
import './RecipeDetails.css';


const useEffect = React.useEffect


export function RecipeDetails(props) {

  useEffect(() => {
    props.getRecipeDetails(props.match.params.id);
  }, [])

  return (
    <div id={props.recipe.id} className="card-container">
      <div className="card u-clearfix">
        <div className="card-body">
          <h2 className="card-title">{props.recipe.title}</h2>
          <p>Likes: {props.recipe.aggregateLikes}</p>
          <p>Health Score: {props.recipe.healthScore}</p>
          <h4>Resumen : </h4>
          <span className="card-description subtle" dangerouslySetInnerHTML={{ __html: props.recipe.summary }}></span>
          <h3>Paso a Paso</h3>
          <p className="card-instructions" dangerouslySetInnerHTML={{__html: props.recipe.instructions}}></p>
          <p>Diets: {props.recipe.diets}</p>
        </div>
        <img src={props.recipe.image ? props.recipe.image : 'https://wallpaperaccess.com/full/1412206.jpg'} alt="" className='card-media' />
      </div>
      <div class="card-shadow"></div>
    </div>
  );
}


function mapStateToProps(state) {
  return {
    recipe: state.recipeDetails
  };
}

function mapDispatchToProps(dispatch) {
  return {
    getRecipeDetails: id => dispatch(getRecipeDetails(id))
  };
}


export default connect(mapStateToProps, mapDispatchToProps)(RecipeDetails);