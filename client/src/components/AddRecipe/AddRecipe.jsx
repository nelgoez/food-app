import React, { useState } from 'react';
import { connect } from 'react-redux';
import { addRecipe } from '../../actions/index';
import dietTypes from '../../const'
import './AddRecipe.css'


export function AddRecipe(props) {

    const [recipe, setRecipe] = useState({
        title: '',
        image: '',
        diets: [],
        summary: '',
        aggregateLikes: 0,
        healthScore: 0,
        instructions: '',
        filled: {
            title: false,
            diets: false,
            summary: false,
            instructions: false
        },
        errors: {
            required: {
                title: false,
                diets: false,
                summary: false,
                instructions: false
            },
            valid: {
                title: false,
                diets: false,
                summary: false,
                instructions: false
            }
        }
    })


    function handleChange(e) {
        const target = e.target
        const { prop, value } = target;
        setRecipe({ [prop]: [value] });
        const errors = {
            required: { ...recipe.errors.required, [prop]: false }
        };
        setRecipe({
            [prop]: value,
            errors: { ...recipe.errors, ...errors }
        });
    }

    function handleSubmit(e) {
        isFormInvalid() ?
            props.addRecipe(recipe) :
            alert('Fill the fields')
            e.preventDefault();
    }


    function handleBlur(e) {
        const field = e.target.name;
        setRecipe({
            filled: { ...recipe.filled, [field]: true }
        });
        validate(e);
    }

    function validate(e) {
        const target = e.target;
        const { value, name } = target;

        if (value.trim().length === 0) {
            const errors = {
                required: { ...recipe.errors.required, [name]: true }
            };

            setRecipe({
                errors: { ...recipe.errors, ...errors }
            });
            return;
        }

        if (name === 'diets') {
            validateDiets(value);
        }
    }

    function validateDiets(diets) {
        const DietsIsValid = diets.every(d => dietTypes.includes(d));
        const errors = {
            valid: { ...recipe.errors.valid, diets: DietsIsValid }
        };

        setRecipe({
            errors: { ...recipe.errors, ...errors }
        });
    }

    function hasError(field) {
        return (recipe.errors.required[field] || !recipe.errors.valid[field]) && recipe.filled[field];
    }

    function isFormInvalid() {
        const { errors } = recipe;
        const { required, valid } = errors;
        const isSomeFieldRequired = Object.keys(required).some(error => required[error]);
        const isSomeFieldInvalid = Object.keys(valid).some(error => !valid[error]);

        return isSomeFieldInvalid || isSomeFieldRequired;
    }

    function displayError(field) {
        const { required, valid } = recipe.errors;
        const errorMessage = `Field ${field} is `;

        if (required[field]) {
            return `${errorMessage} required`;
        }

        if (!valid[field]) {
            return `${errorMessage} not valid`;
        }
    }

    return (
        <div className='root'>
            <h1>Add your Recipe</h1>
            <form onSubmit={handleSubmit}>
                <label>
                    Name:
            </label>
                <div className="row-input">
                    <input
                        type="text"
                        onBlur={handleBlur}
                        className={hasError('title') ? 'error' : ''}
                        name='title'
                        value={recipe.title}
                        onChange={handleChange} />
                    <p className={hasError('title') ? 'error-message__visible' : 'error-message'}>
                        {displayError('title')}
                    </p>
                </div>
                <div className="row-input">
                    <label>
                        Image Source:
            </label>
                    <input type="text"
                        onBlur={handleBlur}
                        className={hasError('image') ? 'error' : ''}
                        name='image'
                        value={recipe.image}
                        onChange={handleChange} />
                    <p className={hasError('image') ? 'error-message__visible' : 'error-message'}>
                        {displayError('image')}
                    </p>
                </div>
                <div className="row-input">
                    <label>
                        Diets:
            </label>
                    <input type="text"
                        onBlur={handleBlur}
                        className={hasError('diets') ? 'error' : ''}
                        name='diets'
                        value={recipe.diets}
                        onChange={handleChange} />
                    <p className={hasError('diets') ? 'error-message__visible' : 'error-message'}>
                        {displayError('diets')}
                    </p>
                </div>
                <div className="row-input">
                    <label>
                        Summary:
            </label>
                    <input type="text"
                        onBlur={handleBlur}
                        className={hasError('summary') ? 'error' : ''}
                        name='summary'
                        value={recipe.summary}
                        onChange={handleChange} />
                    <p className={hasError('summary') ? 'error-message__visible' : 'error-message'}>
                        {displayError('summary')}
                    </p>
                </div >
                <div className="row-input">
                    <label>
                        Instructions:
            </label>
                    <input type="text"
                        name='instructions'
                        onBlur={handleBlur}
                        className={hasError('instructions') ? 'error' : ''}
                        value={recipe.instructions}
                        onChange={handleChange} />
                    <p className={hasError('instructions') ? 'error-message__visible' : 'error-message'}>
                        {displayError('instructions')}
                    </p>
                </div>
                <div className="row-input">
                    <label>
                        Likes:
            </label>
                    <input type="number" name='aggregateLikes' value={recipe.aggregateLikes} onChange={handleChange} />
                </div>
                <div className="row-input">
                    <label>
                        health Score:
            </label>
                    <input type="number" name='healthScore' value={recipe.healthScore} onChange={handleChange} />
                </div>
                <div className="submit-button-container">
                    <input type="submit" value="Submit" disabled={isFormInvalid()} />
                </div>
            </form>
        </div>
    );

}

const mapDispatchToProps = (dispatch) => {
    return {
        addRecipe: (recipe) => {
            dispatch(addRecipe(recipe))
        }
    }
}

export default connect(null, mapDispatchToProps)(AddRecipe)