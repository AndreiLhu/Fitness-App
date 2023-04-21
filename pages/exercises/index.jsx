import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';
import Popup from '@/components/Popup';
import styled from 'styled-components';

const ExercisesWrapper = styled.div`
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

    input[type='button'] {
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

const Exercises = () => {
  const axios = require('axios');
  const [exercisesData, setExercisesData] = useState(null);
  const [selectedMuscle, setSelectedMuscle] = useState('Biceps');
  const [isOpen, setIsOpen] = useState(false);
  const [muscleIndex, setMuscleIndex] = useState(null);
  const muscleOptions = [
    'Biceps',
    'Abdominals',
    'Calves',
    'Chest',
    'Forearms',
    'Glutes',
    'Lats',
    'Lower back',
    'Middle back',
    'Neck',
    'Quadriceps',
    'Traps',
    'Triceps',
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
    <>
      <ExercisesWrapper>
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
            {exercisesData.map((exercise, index) => (
              <ul key={index}>
                <h2>{exercise.name}</h2>
                <li>Type: {exercise.type}</li>
                <li>Exercices for: {exercise.muscle}</li>
                <li>Equipment: {exercise.equipment}</li>
                <li>Difficulty: {exercise.difficulty}</li>
                <p>
                  Instructions: <br />
                  <br />
                  {exercise.instructions.slice(0, 100)}
                </p>
                {isOpen && index === muscleIndex && (
                  <Popup
                    content={
                      <>
                        <p>{exercise.instructions.slice(100)}</p>
                      </>
                    }
                  />
                )}
                <input
                  id="muscleButton"
                  type="button"
                  value={isOpen && index === muscleIndex ? 'Close' : 'See More'}
                  onClick={() => togglePopup(index)}
                />
              </ul>
            ))}
          </form>
        </div>
      </ExercisesWrapper>
    </>
  );
};
export default Exercises;
