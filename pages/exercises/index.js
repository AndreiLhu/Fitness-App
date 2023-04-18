import axios from 'axios';
import React from 'react';

const Exercises = () => {
  const axios = require('axios');

  const muscle = 'biceps';

  axios
    .get('https://api.api-ninjas.com/v1/exercises', {
      params: { muscle },
      headers: {
        'X-Api-Key': process.env.API_KEY,
      },
    })
    .then((response) => {
      console.log(response.data);
    })
    .catch((error) => {
      console.error('Request failed:', error);
    });

  return <div></div>;
};

export default Exercises;
