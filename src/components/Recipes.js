import React from "react";

function Recipes({ recipe }) {
  return (
    <div className="recipeTile">
      <img className="recipe-img" src={recipe["recipe"]["image"]} />
      <p className="recipe-name">{recipe["recipe"]["label"]}</p>
    </div>
  );
}

export default Recipes;
