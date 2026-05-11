import React from 'react'
import { Link } from 'react-router-dom';
import './Recipe.css'


export default function Recipe({ recipe, onClose }) {
    return (
        <div className='hero-section' data-testid="recipe-card">
            <div key={recipe.id} className='card-item'>
                <div className="card-background" >
                    <img src={recipe.image} alt='imagen no encontrada' />
                </div>
                <div className='card'>
                    <div className='card-content'>
                        <h2 className='card-title'>{recipe.title}</h2>
                        <h4>Diets: </h4>
                        {recipe.diets && recipe.diets.length ? recipe.diets.map((d, i) => <div key={i} className='card-text'>{d}</div>) : <div className='card-text'>ALL</div>}
                        <div className='actions'>
                            <Link to={`/recipe/${recipe.id}`} className='read' data-testid="recipe-read-link">Read</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
