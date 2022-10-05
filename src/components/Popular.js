import React, { useState, useEffect } from "react";

function Popular() {
  //useState Hook
  const [popular, setPopular] = useState([]);

  //useEffect hook to render our popularRecipes when the page loads
  useEffect(() => {
    popularRecipes();
  }, []);

  //fetch 10 popular recipes from the api
  const popularRecipes = async () => {
    // API key is contained in the .env file
    const api = await fetch(
      `https://api.spoonacular.com/recipes/random?apiKey=11d29a0b8e6c4f7e9e7baf9875c722a8&number=10`
    );

    const data = await api.json();
    console.log(data);
    //setPopular to data.recipes array
    setPopular(data.recipes);
  };

  return (
    <div>
      {popular.map((recipes) => {
        return (
          <div key={recipes.id}>
            <p>{recipes.title}</p>
          </div>
        );
      })}
    </div>
  );
}

export default Popular;
