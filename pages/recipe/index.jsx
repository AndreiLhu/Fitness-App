import { useEffect, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import axios from 'axios';
import styled from 'styled-components';
const RecipesWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;

  h1 {
    margin-bottom: 10px;
    font-size: 2rem;
  }

  select {
    margin-bottom: 20px;
    font-size: 1.2rem;
    padding: 10px;
    border-radius: 5px;
    border: none;
    box-shadow: 0 2px 6px rgba(0, 0, 0, 0.3);
    background-color: #f8f8f8;
    color: #444;

    &:focus {
      outline: none;
      box-shadow: 0 0 4px rgba(0, 0, 0, 0.5);
    }
  }

  ul {
    background: rgb(255, 255, 255);
    background: linear-gradient(
      90deg,
      rgba(255, 255, 255, 1) 0%,
      rgba(243, 243, 243, 1) 5%,
      rgba(214, 214, 214, 1) 21%,
      rgba(181, 181, 181, 1) 43%,
      rgba(142, 142, 142, 1) 65%,
      rgba(117, 117, 117, 1) 85%,
      rgba(90, 90, 90, 1) 100%,
      rgba(66, 66, 66, 1) 100%,
      rgba(0, 0, 0, 1) 100%
    );
    list-style-type: none;
    margin: 0;
    padding: 0;
    border: 1px solid #eee;
    border-radius: 5px;
    margin-bottom: 10px;
    box-shadow: 0 2px 6px rgba(0, 0, 0, 0.3);
    width: 100%;
    max-width: 500px;
    overflow: hidden;

    h2 {
      padding-left: 10px;
      border-bottom: 1px solid #eee;
      border-radius: 5px;
    }

    li {
      padding: 10px;
      font-size: 1.2rem;
      border-bottom: 1px solid #eee;

      &:last-child {
        border-bottom: none;
      }
    }
    p {
      font-size: 1.2rem;
      padding: 10px;
    }

    input {
      background-color: #008080;
      border: 1px solid #ccc;
      border-radius: 5px;
      color: #fff;
      font-size: 1.2rem;
      padding: 10px;
      margin-top: 10px;
      cursor: pointer;
      transition: background-color 0.3s ease;

      &:hover {
        background-color: #006666;
      }
    }
  }

  @media only screen and (min-width: 768px) {
    flex-direction: row;
    justify-content: center;
    align-items: flex-start;

    select {
      margin-right: 20px;
      margin-bottom: 0;
      width: 200px;
    }

    ul {
      margin-right: 20px;
      margin-bottom: 0;
      width: auto;
    }
  }
`;
const Button = styled.button`
  background-color: #008080;
  border: 1px solid #ccc;
  border-radius: 0px 5px 5px 0px;
  color: #fff;
  font-size: 1rem;
  padding: 10px;
  margin-top: 10px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #006666;
  }
`;
const Input = styled.input`
  border: 1px solid #ccc;
  border-radius: 5px 0px 0px 5px;
  font-size: 1rem;
  padding: 10px;
  margin-top: 10px;
`;

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
      <RecipesWrapper>
        <div>
          <h1>Recipes</h1>
          <form onSubmit={handleSearchFormSubmit}>
            <Input
              type="text"
              placeholder="Search for recipes"
              value={searchQuery}
              onChange={handleSearchInputChange}
            />
            <Button type="submit">Search</Button>
          </form>
        </div>
      </RecipesWrapper>
    );
  }

  return (
    <RecipesWrapper>
      <div>
        <h1>Recipes</h1>
        <form onSubmit={handleSearchFormSubmit}>
          <Input
            type="text"
            placeholder="Search for recipes"
            value={searchQuery}
            onChange={handleSearchInputChange}
          />
          <Button type="submit">Search</Button>
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
    </RecipesWrapper>
  );
};

export default Recipe;
