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
    const response = await fetch(searchUrl);
    const data = await response.json();
    setRecipes(data.meals);
    setLoading(false);
  };
  return (
    <div className="container">
      <h1>Food Galore 🍕 </h1>
    </div>
  );
}

export default App;
