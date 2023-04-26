import { useEffect, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import axios from 'axios';

const Recipe = () => {
  const [recipesData, setRecipesData] = useState(null);

  const [searchQuery, setSearchQuery] = useState('');
  const axios = require('axios');

  const handleSearchInputChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleSearchFormSubmit = (event) => {
    event.preventDefault();
    axios
      .get(`https://api.api-ninjas.com/v1/recipe?query=${searchQuery}`, {
        headers: {
          'X-Api-Key': process.env.API_KEY,
        },
      })
      .then((response) => {
        setRecipesData(response.data);
      })
      .catch((error) => {
        console.error('Request failed:', error);
      });
  };

  if (!recipesData) {
    return (
      <div>
        <h1>Recipes</h1>
        <form onSubmit={handleSearchFormSubmit}>
          <input
            type="text"
            placeholder="Search for recipes"
            value={searchQuery}
            onChange={handleSearchInputChange}
          />
          <button type="submit">Search</button>
        </form>
      </div>
    );
  }

  return (
    <div>
      <form onSubmit={handleSearchFormSubmit}>
        <input
          type="text"
          placeholder="Search for recipes"
          value={searchQuery}
          onChange={handleSearchInputChange}
        />
        <button type="submit">Search</button>
      </form>
      <form>
        {recipesData.map((recipes, index) => (
          <ul key={index}>
            <h2>{recipes.title}</h2>
            <li>{recipes.ingredients}</li>
            <li>{recipes.servings}</li>
            <p>{recipes.instructions}</p>
          </ul>
        ))}
      </form>
    </div>
  );
};

export default Recipe;
