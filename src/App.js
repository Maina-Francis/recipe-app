import React from "react";
import { useState } from "react";

function App() {
  const API_KEY = "8e7ccc310f4b29da4ed1741a7382c90d";
  const API_ID = "f923a481";

  const url = `https://api.edamam.com/search?q={search}&app_id=${API_ID}&app_key=${API_KEY}&&health=alcohol-free`;

  //useState Hook
  const [search, setSearch] = useState("");

  //get recipes function
  async function getRecipes() {
    let results = await fetch(url)
      .then((response) => response.json())
      .then((data) => console.log(data));
    // .catch((err) => console.error(err));

    // console.log(results.data);
  }

  return (
    <div className="app">
      <h1 onClick={getRecipes}>Food Recipe Galore🍕</h1>
      <form className="search">
        <input
          type="text"
          placeholder="Search Ingredient"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </form>
    </div>
  );
}

export default App;
