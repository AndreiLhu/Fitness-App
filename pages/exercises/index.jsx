import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';
import Popup from '@/components/Popup';

const Exercises = () => {
  const axios = require('axios');
  const [exercisesData, setExercisesData] = useState(null);
  const [selectedMuscle, setSelectedMuscle] = useState('biceps');
  const [isOpen, setIsOpen] = useState(false);
  const [muscleIndex, setMuscleIndex] = useState(null);
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

  const togglePopup = (i) => {
    setMuscleIndex(i);
    setIsOpen(!isOpen);
  };

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
            <li>{exercise.instructions.slice(0, 30)}</li>
            {isOpen && muscleIndex === muscleIndex && (
              <Popup
                content={
                  <>
                    <p>{exercise.instructions.slice(30)}</p>
                  </>
                }
              />
            )}
            <input
              id="muscleButton"
              type="button"
              value="See More"
              onClick={() => togglePopup(muscleIndex)}
            />
          </ul>
        ))}
      </form>
    </div>
  );
};
export default Exercises;
