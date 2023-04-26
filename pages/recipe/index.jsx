import { useEffect, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import axios from 'axios';

const Recipe = () => {
  const [recipesData, setRecipesData] = useState(null);
  const [selectedRecipe, setSelectedRecipe] = useState('italian wedding soup');

  const axios = require('axios');
  const query = 'italian wedding soup';
  useEffect(() => {
    axios
      .get(`https://api.api-ninjas.com/v1/recipe?query=${query}`, {
        headers: {
          'X-Api-Key': process.env.API_KEY,
        },
      })
      .then((response) => {
        const dataWithIds = response.data.map((item) => {
          return {
            ...item,
            id: uuidv4(),
          };
        });

        setRecipesData(dataWithIds);
      })
      .catch((error) => {
        console.error('Request failed:', error);
      });
  }, [selectedRecipe]);

  if (!recipesData) {
    return <div>Loading...</div>;
  }
  return (
    <div>
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
