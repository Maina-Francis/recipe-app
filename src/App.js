import React from "react";
import {} from "react-router-dom";
import { useState, useEffect } from "react";
import RecipeCard from "./components/RecipeCard";
import SearchBar from "./components/SearchBar";

const url = "https://www.themealdb.com/api/json/v1/1/search.php?s=";

function App() {
  //useState Hook

  const [searchTerm, setSearchTerm] = useState("");
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(false);

  //fetch data from the api function

  // const getRecipes = async () => {
  //   setLoading(true);
  //   const searchUrl = url + searchTerm;
  //   const response = await fetch(searchUrl);
  //   console.log(response);
  //   const data = await response.json();
  //   console.log(data);

  //   setRecipes(data.meals);
  //   setLoading(false);
  // };
  const getRecipes = async () => {
    setLoading(true);
    try {
      const searchUrl = url + searchTerm;
      const response = await fetch(searchUrl);
      const data = await response.json();
      setLoading(false);
      setRecipes(data.meals);
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  };

  //useEffect Hook
  useEffect(() => {
    getRecipes();
  }, []);

  //Search function
  const onSubmit = (e) => {
    e.preventDefault();
    getRecipes();
  };

  return (
    <div className="container">
      <h1>Food Galore 🍕 </h1>
      <SearchBar
        loading={loading}
        value={searchTerm}
        onSubmit={onSubmit}
        onChange={(e) => {
          setSearchTerm(e.target.value);
        }}
      />

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
