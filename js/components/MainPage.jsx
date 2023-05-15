import axios from 'axios';
import React, { useState } from 'react';

const apiKey = process.env.SPOONACULAR_API_KEY;

export default function MainPage() {
  const [inputValue, setInputValue] = useState('');
  const [items, setItems] = useState([]);
  const [recipes, setRecipes] = useState([]);

  async function getRecipesByIngredients(ingredients) {
    const url = `https://api.spoonacular.com/recipes/findByIngredients?ingredients=${ingredients}&apiKey=${apiKey}`;
    const response = await axios.get(url);
    return response.data;
  }

  async function searchRecipes() {
    const ingredients = items.join(',');
    const recipes = await getRecipesByIngredients(ingredients);
    setRecipes(recipes);
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
      <p style={{ textAlign: "center", color: 'brown', paddingBottom: "20px" }}>Introduceti ingredientele: </p>
      <form onSubmit={handleAddItem}>
        <input id="ingredients-input" type="text" value={inputValue} onChange={handleInputChange} style={{ color: 'black', display: "block", margin: "auto" }} />
        <button type="submit" style={{ color: 'green', fontWeight: 'bold', display: "block", margin: "auto", paddingTop: "10px", paddingBottom:"30px" }}>Adauga</button>
      </form>
      <div>
        <div style={{
          color:'black',
          marginLeft: "25%",
        }}> Lista mea:
          {items.map((item, index) => (
            <p style={{color:'black'}} key={index}>{item}</p>
          ))}
        </div>
        <button onClick={handleGenerateRecipes} style={{ color: 'green', fontWeight: 'bold', marginLeft: "25%", paddingTop: "10px", paddingBottom:"30px"}}>Genereaza retele</button>
        <p style={{color: 'black'}}>
          {recipes.length > 0 ? 'Retete disponibile: ' : ''}
          {recipes.map((recipe, index) => (
            <span key={recipe.id}>
              {recipe.title}
              {index < recipes.length - 1 ? ', ' : ''}
            </span>
          ))}
        </p>
      </div>
    </div>
  );
}
