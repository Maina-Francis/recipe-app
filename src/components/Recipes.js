import React from "react";

function Recipes({ recipe }) {
  return (
    <div className="recipeTile">
      <p>{recipe["recipe"]["label"]}</p>{" "}
    </div>
  );
}

export default Recipes;
