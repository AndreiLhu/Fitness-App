import React from 'react';
import { useState } from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  font-family: Arial, sans-serif;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 80vh;

  form {
    background-color: #fff;
    border-radius: 8px;
    padding: 32px;
    box-shadow: 0px 4px 16px rgba(0, 0, 0, 0.1);
  }

  div[id='inputs'] {
    display: flex;
    flex-direction: column;
    margin-bottom: 16px;
  }

  label {
    font-weight: bold;
    margin-bottom: 8px;
  }

  input {
    border: none;
    border-radius: 44px;
    padding: 8px;
    font-size: 16px;
    margin-bottom: 8px;
  }

  button {
    background-color: #008080;
    color: #fff;
    border: none;
    border-radius: 4px;
    padding: 8px 16px;
    font-size: 16px;
    cursor: pointer;
    transition: background-color 0.2s;

    &:hover {
      background-color: #006666;
    }
  }

  h2 {
    margin-top: 16px;
  }
`;

const CalculatorBMI = () => {
  const [height, setHeight] = useState(null);
  const [weight, setWeight] = useState(null);
  const [bmi, setBmi] = useState(null);
  const [result, setResult] = useState(null);
  const handleSubmit = (e) => e.preventDefault();

  const handleBMI = () => {
    let bmiResult = (weight / (height / 100) ** 2).toFixed(2);
    setBmi(bmiResult);

    let result = getBmi(bmiResult);
    setResult(result);
    setHeight('');
    setWeight('');
  };
  const resetValues = () => {
    setHeight(null);
    setWeight(null);
    setBmi(null);
    setResult(null);
  };
  const getBmi = (bmi) => {
    if (bmi < 18.5) return 'Underweight';
    else if (bmi >= 18.5 && bmi < 24.9) return 'Normal Weight';
    else if (bmi >= 24.9 && bmi < 29.9) return 'Overweight';
    else return 'Obese';
  };

  return (
    <Wrapper>
      <form onSubmit={handleSubmit}>
        <div id="inputs">
          <label htmlFor="height">Height</label>
          <input
            type="number"
            placeholder="cm.."
            value={height}
            onChange={(e) => setHeight(e.target.value)}
          />
        </div>
        <div id="inputs">
          <label htmlFor="weight">Weight</label>
          <input
            type="number"
            placeholder="kg.."
            value={weight}
            onChange={(e) => setWeight(e.target.value)}
          />
        </div>
        <button type="submit" onClick={handleBMI}>
          Calculate BMI
        </button>
        <h2>Your BMI is: {bmi}</h2>
        <h2>Your weight: {result}</h2>
        <button type="button" onClick={resetValues}>
          Refresh
        </button>
      </form>
    </Wrapper>
  );
};

export default CalculatorBMI;
