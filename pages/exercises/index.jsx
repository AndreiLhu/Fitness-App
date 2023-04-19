import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';

const Exercises = () => {
  const [exercisesData, setExercisesData] = useState(null);
  const [selectedMuscle, setSelectedMuscle] = useState('biceps');
  const muscleOptions = [
    'biceps',
    'abdominals',
    'calves',
    'chest',
    'forearms',
    'glutes',
    'lats',
    'lower_back',
    'middle_back',
    'neck',
    'quadriceps',
    'traps',
    'triceps',
  ];

  const axios = require('axios');

  useEffect(() => {
    axios
      .get('https://api.api-ninjas.com/v1/exercises', {
        params: { muscle: selectedMuscle },
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
        setExercisesData(dataWithIds);
      })
      .catch((error) => {
        console.error('Request failed:', error);
      });
  }, [selectedMuscle]);

  if (!exercisesData) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>Exercises for {selectedMuscle}</h1>
      <select
        value={selectedMuscle}
        onChange={(event) => setSelectedMuscle(event.target.value)}
      >
        {muscleOptions.map((muscle) => (
          <option value={muscle} key={muscle}>
            {muscle}
          </option>
        ))}
      </select>
      <form>
        {exercisesData.map((exercise) => (
          <ul key={exercise.id}>
            <li>{exercise.name}</li>
            <li>{exercise.type}</li>
            <li>{exercise.muscle}</li>
            <li>{exercise.equipment}</li>
            <li>{exercise.difficulty}</li>
            <li>{exercise.instructions}</li>
          </ul>
        ))}
      </form>
    </div>
  );
};
export default Exercises;
