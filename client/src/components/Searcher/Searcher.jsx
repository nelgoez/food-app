import React from "react";
import { connect } from "react-redux";
import { getRecipes } from "../../actions"
import Recipe from '../Recipe/Recipe'
import './Searcher.css';

const Searcher = function (props) {

  const [state, setState] = React.useState({ name: "" })
  const [searched, setSearched] = React.useState(false)

  function handleChange(e) {
    setState({ name: e.target.value });
  }
  function handleSubmit(e) {
    e.preventDefault();
    if (state.name.trim()) {
      setSearched(true)
      props.getRecipes(state.name.trim())
    }
  }

  function renderResults() {
    if (props.loading) {
      return (
        <div className="state-msg" data-testid="search-loading">
          <div className="spinner" />
          <p>Searching recipes...</p>
        </div>
      )
    }

    if (!searched) {
      return (
        <div className="state-msg" data-testid="search-hint">
          <p className="hint">Type an ingredient above and hit SEARCH to find recipes</p>
        </div>
      )
    }

    if (!props.recipes || props.recipes.length === 0) {
      return (
        <div className="state-msg" data-testid="search-empty">
          <p className="empty">No recipes found for "<strong>{state.name}</strong>"</p>
          <p className="hint">Try a different ingredient or check the spelling</p>
        </div>
      )
    }

    return props.recipes.map((recipe, i) => (
      <Recipe key={recipe.id || i} recipe={recipe} />
    ))
  }

  return (
    <div className='cnt'>
      <div className='box'>
        <form className="form-container" onSubmit={(e) => handleSubmit(e)} data-testid="search-form">
            <input
              placeholder='Search by ingredient...'
              className='input'
              type="text"
              id="name"
              autoComplete="off"
              value={state.name}
              onChange={(e) => handleChange(e)}
              data-testid="search-input"
            />
            <button id='btn' type="submit" data-testid="search-button">SEARCH</button>
        </form>
      </div>
      <div className='results' data-testid="search-results">
        {renderResults()}
      </div>
    </div>
  )
}

function mapStateToProps(state) {
  return {
    recipes: state.recipes,
    loading: state.loading
  };
}

function mapDispatchToProps(dispatch) {
  return {
    getRecipes: name => dispatch(getRecipes(name))
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Searcher);
