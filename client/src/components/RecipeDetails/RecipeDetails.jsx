import React from 'react';
import ReactHtmlParser from 'html-react-parser'
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
          <h4>Resumen : </h4>
          <span className="card-description subtle">{ReactHtmlParser(props.recipe.summary)}</span>
          <h3>Paso a Paso</h3>
          <p className="card-instructions">{ReactHtmlParser(props.recipe.instructions)}</p>
        </div>
          <img src={props.recipe.image} alt="" className='card-media' />
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