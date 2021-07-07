import React, { useEffect } from "react";
import { connect } from "react-redux";
import { getRecipes, getDiets } from "../../actions"

import './Searcher.css';


const Searcher = function (props) {


  const [onSearch, setOnSearch] = React.useState({ name: "" })

  useEffect(() => {
    props.getRecipes(onSearch.name);
    /*eslint-disable-next-line*/
  }, [])
  
  useEffect(() => {
    props.getDiets();
  }, [props.recipes])
  
  
  function handleChange(e) {
    setOnSearch({ name: e.target.value });
  }
  
  function handleSubmit(e) {
    e.preventDefault();
    props.getRecipes(onSearch.name)
    setOnSearch({ name: '' })
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
            value={onSearch.name}
            onChange={(e) => handleChange(e)}
          />
          <button id='search' type="submit" href='#'>BUSCAR</button>
        </form>
      </div>
    </div>
  )
}

function mapDispatchToProps(dispatch) {
  return {
    getRecipes: name => dispatch(getRecipes(name)),
    getDiets: () => dispatch(getDiets())
  };
}

export default connect(null, mapDispatchToProps)(Searcher);