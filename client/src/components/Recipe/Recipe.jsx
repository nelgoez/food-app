import React from 'react'
import { Link } from 'react-router-dom';
import './Recipe.css'


export default function Recipe({ recipe }) {
    return (
        <div key={recipe.id} className='card-item'>
            <div className="card-background" key={`${recipe.id}-img`} >
                <img src={recipe.image ? recipe.image : 'https://wallpaperaccess.com/full/1412206.jpg'} alt='imagen no encontrada' />
            </div>
            <div className='card-content' key={`${recipe.id}-content`}>
                <h2 className='card-title'>{recipe.title}</h2>
                <h4>Diets: </h4>
                {recipe.diets.length ?
                    recipe.diets.map((d, index) => <p className='card-text' key={`${recipe.id}-diets-${index}`}>{d}</p>) :
                    <div className='card-text' key={`${recipe.id}-diets`}>ALL</div>}
                <div className='actions' key={`${recipe.id}-details`}>
                    <Link to={`/recipe/${recipe.id}`} className='read'>Read</Link>
                </div>
            </div>
        </div>
    )
}