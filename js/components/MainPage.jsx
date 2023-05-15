import axios from 'axios';
import React, { useState, useEffect } from 'react';

export default function MainPage() {
  const [inputValue, setInputValue] = useState('');
  const [items, setItems] = useState([]);
  const [recipes, setRecipes] = useState([]);
  const [selectedRecipe, setSelectedRecipe] = useState(null);

  async function checkApiKey() {
    const url = `https://api.spoonacular.com/recipes/complexSearch?query=pizza&apiKey=${'14207be918ab44ff9267c71136ebab96'}`;
    try {
      const response = await axios.get(url);
      if (response.status === 200) {
        console.log('API key is valid!');
      }
    } catch (error) {
      console.error('Error occurred while checking API key:', error);
    }
  }

  async function getRecipesByIngredients(ingredients) {
    const url = `https://api.spoonacular.com/recipes/findByIngredients?ingredients=${ingredients}&apiKey=${'14207be918ab44ff9267c71136ebab96'}`;
    const response = await axios.get(url);
    return response.data;
  }

  async function getRecipeDetails(recipeId) {
    const url = `https://api.spoonacular.com/recipes/${recipeId}/information?includeNutrition=false&apiKey=${'14207be918ab44ff9267c71136ebab96'}`;
    const response = await axios.get(url);
    return response.data;
  }

  async function searchRecipes() {
    checkApiKey();
    const ingredients = items.join(',');
    const recipes = await getRecipesByIngredients(ingredients);
    setRecipes(recipes);
  }

  async function handleRecipeClick(recipe) {
    const recipeDetails = await getRecipeDetails(recipe.id);
    setSelectedRecipe(recipeDetails);
  }

  function handleInputChange(event) {
    setInputValue(event.target.value);
  }

  function handleAddItem(event) {
    event.preventDefault();
    setItems([...items, inputValue]);
    setInputValue('');
  }

  function handleGenerateRecipes(event) {
    event.preventDefault();
    searchRecipes();
  }

  useEffect(() => {
    if (selectedRecipe) {
      getRecipeDetails(selectedRecipe.id).then(recipeDetails => {
        setSelectedRecipe(recipeDetails);
      });
    }
  }, [selectedRecipe]);
  return (
	<div style={{
	  backgroundImage: `url("https://i.pinimg.com/736x/33/ef/8b/33ef8b9c0b902154a6cd4103a21275ef.jpg")`,
	  backgroundSize: 'cover',
	  backgroundPosition: 'center center',
	  backgroundRepeat: 'no-repeat',
	  height: '100vh'
	}}>
	  <p style={{ textAlign: "center", color: 'brown', fontSize: "30px", fontWeight: 'bold', fontStyle: 'inherit' }}>FUDDI</p>
	  <p style={{ textAlign: "center", color: 'brown', fontSize: "20px", fontStyle: 'inherit', paddingBottom: "60px" }}>-Get the best receipes ideas with your ingredients-</p>
	  <p style={{ textAlign: "center", color: 'brown', paddingBottom: "20px" }}>Type your ingredient: </p>
	  <form onSubmit={handleAddItem}>
		<input id="ingredients-input" type="text" value={inputValue} onChange={handleInputChange} style={{ color: 'black', display: "block", margin: "auto" }} />
		<button type="submit" style={{ color: 'green', fontWeight: 'bold', display: "block", margin: "auto", paddingTop: "10px", paddingBottom:"30px" }}>Add</button>
	  </form>
	  <div>
		<div style={{
		  color:'black',
		  marginLeft: "25%",
		}}> My List:
		  {items.map((item, index) => (
			<p style={{color:'black'}} key={index}>{item}</p>
		  ))}
		</div>
		<button onClick={handleGenerateRecipes} style={{ color: 'green', fontWeight: 'bold', marginLeft: "25%", paddingTop: "10px", paddingBottom:"30px"}}>Generate receipt</button>
		<div style={{color: 'brown', fontWeight: 'bold',marginLeft: "25%", width:"50%" }}>
		  {recipes.length > 0 ? 'Available recipes: ' : ''}
		  {recipes.map((recipe) => (
			<p
			  key={recipe.id}
			  style={{cursor: 'pointer'}}
			  onClick={async () => {
				const response = await axios.get(`https://api.spoonacular.com/recipes/${recipe.id}/analyzedInstructions?apiKey=${'14207be918ab44ff9267c71136ebab96'}`);
				const instructions = response.data[0].steps.map(step => step.step);
				alert(`Instructions for ${recipe.title}:\n${instructions.join('\n')}`);
			  }}
			>
			  {recipe.title}
			</p>
		  ))}
		</div>
	  </div>
	</div>
  );
}  