import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { addRecipe, getDiets } from '../../actions/index';
import './AddRecipe.css'


export const AddRecipe = (props) => {

useEffect(()=>{
    props.getDiets()
    },[])

    const [recipe, SetRecipe] = useState({
        title: '',
        diets: [],
        summary: '',
        aggregateLikes: 0,
        healthScore: 0,
        instructions: '',
    });

    const [errors, SetErrors] = useState({});


    function handleChange(e) {
        const target = e.target
        const { name, value, checked } = target;
        let newState = value
        if (name === 'diets') {
            newState = checked ? [...diets, value] : diets.filter(d => d !== value)
        }
        SetRecipe({
            ...recipe, [name]: newState,
        });
        validate(name, newState)
    }

    function handleBlur(e) {
        const { target } = e;
        const { name, value } = target;
        validate(name, value)
    }

    function validate(name, value) {
        if (value.length) SetErrors({});
        else SetErrors({ ...errors, [name]: `${name} is required` })
        return errors;
    }

    function handleSubmit(e) {
        e.preventDefault();
        props.addRecipe(recipe)
        props.history.push('/home')
    }


    const { title, diets, summary, instructions, aggregateLikes, healthScore } = recipe;

    return (
        <div className='root'>
            <h1>Add your Recipe</h1>
            <form onSubmit={handleSubmit}>
                <label>
                    <b>Name:</b>
            </label>
                <div className="row-input">
                    <input
                        type="text"
                        className={errors.title ? 'error' : ''}
                        onBlur={handleBlur}
                        name="title"
                        value={title}
                        onChange={handleChange} />
                    {errors.title && <p className={'error-message__visible'}>{errors.title}</p>}
                </div>
                <div className="row-input-diets">
                    <label>
                        <b>Diets:</b>
            </label>
                    {props.diets.map((d, i) => <span>
                        <label>
                            {d.diet}
                            </label>
                            <input type="checkbox"
                        className={errors.diets ? 'error' : 'diets'}
                        name='diets'
                        value={d.diet}
                        key={i}
                        onChange={handleChange} />
                    </span>)}
                </div>
                <label>
                    <b>Summary:</b>
            </label>
                <div className="row-input">
                    <input
                        type="text"
                        className={errors.summary ? 'error' : ''}
                        onBlur={handleBlur}
                        name="summary"
                        value={summary}
                        onChange={handleChange} />
                    {errors.summary && <p className={'error-message__visible'}>{errors.summary}</p>}
                </div>
                <label>
                    <b>Instructions:</b>
            </label>
                <div className="row-input">
                    <input
                        type="text"
                        className={errors.instructions ? 'error' : ''}
                        name="instructions"
                        value={instructions}
                        onChange={handleChange} />
                </div>
                <label>
                    aggregateLikes:
            </label>
                <div className="row-input">
                    <input
                        type="number"
                        className={errors.aggregateLikes ? 'error' : ''}
                        name="aggregateLikes"
                        value={aggregateLikes}
                        onChange={handleChange} />
                </div>
                <label>
                   <b>healthScore:</b>
            </label>
                <div className="row-input">
                    <input
                        type="number"
                        className={errors.healthScore ? 'error' : ''}
                        name="healthScore"
                        value={healthScore}
                        onChange={handleChange} />
                </div>
                <div className="submit-button-container">
                    <input className='submit' type="submit" value="Submit" disabled={errors.title} />
                </div>
            </form>
        </div>
    );

}


const mapDispatchToProps = (dispatch) => {
    return {
        addRecipe: (recipe) => {
            dispatch(addRecipe(recipe))
        },
        getDiets: () => dispatch(getDiets())
    }
}

const mapStateToProps = (state) => {
    return {
        diets: state.diets
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AddRecipe)