import React from "react";

function RecipeCard({ recipe }) {
  //destructure props
  console.log(recipe);
  const { idMeal, strCategory, strMeal, strMealThumb } = recipe;
  return (
    <div className="recipe-card">
      <img src={strMealThumb} className="image-card" alt={strMeal} />

      <div className="card-body">
        <span className="category">{strCategory}</span>
        <h2>{strMeal}</h2>

        {/* link to get more info on the recipe ingredients */}
        <a
          href={"https://www.themealdb.com/meal/" + idMeal}
          target="_blank"
          rel="noreferrer"
        >
          Get Ingredients
        </a>
      </div>
    </div>
  );
}

export default RecipeCard;
