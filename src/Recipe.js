import React from 'react';
import style from './recipe.module.css';

const Recipe = (props) => {
    return (
        <div className={style.recipe}>
            <h1>{props.title}</h1>
            <ol>
                {props.ingredients.map(ingredient => (
                    <li>{ingredient.text}</li>
                ))}
            </ol>
            <p>{props.calories}</p>
            <img src={props.image} className={style.image}/>
        </div>
     );
}
 
export default Recipe;