import React, { useState } from "react";
import Axios from "axios";
import Recipes from "./components/Recipes";

function App() {
  const API_KEY = "11f1338bfc319891045d4a7721dabd03";
  const API_ID = "0a97fde9";

  const url = `https://api.edamam.com/search?q={search}&app_id=${API_ID}&app_key=${API_KEY}&health=alcohol-free`;

  //useState Hook
  const [search, setSearch] = useState("");
  const [recipes, setRecipes] = useState([]);

  //get recipes function
  // ***tried but got Unhandled Rejection (TypeError): Failed to fetch***

  // async function getRecipes() {
  //   await fetch(url)
  //     .then((response) => response.json())
  //     .then((response) => {
  //       setSearch(response.result);
  //       console.log(response.result);
  //     });
  //   // .catch((err) => console.error(err));

  //   // console.log(results.data);
  // }

  //fetch using axios
  async function getRecipes() {
    let result = await Axios.get(url);
    setRecipes(result.data.hits);
    console.log(result.data);
  }

  //submit function to prevent default
  const submitFunction = (e) => {
    e.preventDefault();
    getRecipes();
  };

  return (
    <div className="app">
      <h1>
        Food Recipe Galore<span role="img">🍕</span>
      </h1>
      <form className="search" onSubmit={submitFunction}>
        <input
          className="input"
          type="text"
          placeholder="Search Ingredient"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <input className="submit" type="submit" value="Search" />
      </form>

      <div className="app-recipes">
        {recipes.map((recipe) => {
          return <Recipes recipe={recipe} />;
        })}
      </div>
    </div>
  );
}

export default App;
