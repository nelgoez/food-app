import React from 'react';
import ReactHtmlParser from 'html-react-parser'
import { connect } from 'react-redux';
import { getRecipeDetails } from '../../actions';
import './RecipeDetails.css';

const useEffect = React.useEffect

export function RecipeDetails({ getRecipeDetails, match, recipe }) {

  useEffect(() => {
    getRecipeDetails(match.params.id);
  }, [getRecipeDetails, match.params.id])

  if (!recipe || !recipe.id) {
    return (
      <div className="card-container">
        <div className="card" style={{ textAlign: 'center', padding: '3rem' }}>
          <p style={{ color: '#a0aec0' }}>Loading recipe...</p>
        </div>
      </div>
    )
  }

  return (
    <div id={recipe.id} className="card-container">
      <div className="card u-clearfix">
        <div className="card-body">
          <h2 className="card-title">{recipe.title}</h2>
          <h4>Summary : </h4>
          <span className="card-description subtle">{recipe.summary ? ReactHtmlParser(recipe.summary) : ''}</span>
          {recipe.instructions && (
            <>
              <h3>Step By Step</h3>
              <p className="card-instructions">{ReactHtmlParser(recipe.instructions)}</p>
            </>
          )}
        </div>
        {recipe.image && <img src={recipe.image} alt={recipe.title || ''} className='card-media' />}
      </div>
      <div className="card-shadow"></div>
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
