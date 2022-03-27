import React from "react";
import { connect } from "react-redux";
import { getRecipes } from "../../actions"
import Recipe from '../Recipe/Recipe'
import './Searcher.css';


const Searcher = function (props) {

  const [state, setState] = React.useState({ name: "" })

  function handleChange(e) {
    setState({ name: e.target.value });
  }
  function handleSubmit(e) {
    e.preventDefault();
    props.getRecipes(state.name)
    setState('')
  }

  return (
    <div className='cnt'>
      <div className='box'>
        <form className="form-container" onSubmit={(e) => handleSubmit(e)}>
            <input
              placeholder='Buscar...'
              className='input'
              type="text"
              id="name"
              autoComplete="off"
              value={state.name}
              onChange={(e) => handleChange(e)}
            />
            <button id='btn' type="submit" href='#'>BUSCAR</button>
        </form>
      </div>
      <div className='results'>
          {props.recipes && props.recipes.map(recipe => <Recipe recipe={recipe} />)}
      </div>
    </div>
  )
}

function mapStateToProps(state) {
  return {
    recipes: state.recipes
  };
}

function mapDispatchToProps(dispatch) {
  return {
    getRecipes: name => dispatch(getRecipes(name))
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Searcher);