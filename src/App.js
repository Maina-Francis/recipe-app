import React from "react";
import { useState, useEffect } from "react";
import RecipeCard from "./components/RecipeCard";
import SearchBar from "./components/SearchBar";

const url = "www.themealdb.com/api/json/v1/1/search.php?s=";

function App() {
  //useState Hook

  const [searchTerm, setSearchTerm] = useState("");
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(false);

  //fetch data from the api function

  const getRecipes = async () => {
    setLoading(true);
    const searchUrl = url + searchTerm;
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);

    setRecipes(data.meals);
    setLoading(false);
  };

  //useEffect Hook
  useEffect(() => {
    getRecipes();
  }, []);
  return (
    <div className="container">
      <h1>Food Galore 🍕 </h1>
      <div className="recipes">
        {/* check whether recipes are available and render the recipes */}

        {recipes
          ? recipes.map((recipe) => (
              <RecipeCard key={recipe.idMeal} recipe={recipe} />
            ))
          : "No Recipes Available"}
      </div>
    </div>
  );
}

export default App;
