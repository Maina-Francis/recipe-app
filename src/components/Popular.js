function Popular() {
  //fetch 10 popular recipes from the api
  const popularRecipes = async () => {
    // API key is contained in the .env file
    const api = await fetch(
      `https://api.spoonacular.com/recipes/random?apiKey=${process.env.SPOONACULAR_API_KEY}&number=10`
    );
    const data = await api.json();
    console.log(data);
  };

  return <div>Popular</div>;
}

export default Popular;
