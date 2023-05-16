import React from 'react';

export default function RecipeImage({ recipe }) {
  if (!recipe || !recipe.image) {
    return null;
  }

  return (
    <div style={{ float: 'right', marginLeft: '10px' }}>
      <img src={recipe.image} alt={recipe.title} style={{ width: '300px', height: '300px' }} />
    </div>
  );
}
