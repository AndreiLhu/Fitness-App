import React from 'react';
import { useState } from 'react';
import './bmi.css';

const CalculatorBMI = () => {
  const [height, setHeight] = useState(null);
  const [weight, setWeight] = useState(null);
  const [bmi, setBmi] = useState(null);
  const [result, setResult] = useState(null);

  const handleBMI = () => {
    let bmiResult = (weight / (height / 100) ** 2).toFixed(2);
    setBmi(bmiResult);

    let result = getBmi(bmiResult);
    setResult(result);
    setHeight('');
    setWeight('');
  };

  const getBmi = (bmi) => {
    if (bmi < 18.5) return 'Underweight';
    else if (bmi >= 18.5 && bmi < 24.9) return 'Normal Weight';
    else if (bmi >= 24.9 && bmi < 29.9) return 'Overweight';
    else return 'Obese';
  };

  return (
    <div>
      <form id="mainContainer">
        <div className="height">
          <label for="height">Height</label>
          <input
            type="text"
            placeholder="cm.."
            value={height}
            onChange={(e) => setHeight(e.target.value)}
          />
        </div>
        <div className="weight">
          <label for="weight">Weight</label>
          <input
            type="text"
            placeholder="kg.."
            value={weight}
            onChange={(e) => setWeight(e.target.value)}
          />
        </div>
        <div className="calculate">
          <button type="button" onClick={handleBMI}>
            Calculate BMI
          </button>
        </div>
        <h3>
          Your BMI is: <h1>{bmi}</h1>
        </h3>
        <h3>
          Your weight : <h2>{result}</h2>
        </h3>
      </form>
    </div>
  );
};
{
}
export default CalculatorBMI;
