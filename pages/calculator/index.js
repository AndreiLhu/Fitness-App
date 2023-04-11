import React from 'react';
import { useState } from 'react';
import styled from 'styled-components';
const Wrapper = styled.div`
  font-family: Arial, sans-serif;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const Form = styled.form`
  background-color: #fff;
  border-radius: 8px;
  padding: 32px;
  box-shadow: 0px 4px 16px rgba(0, 0, 0, 0.1);
`;

const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 16px;
`;

const Label = styled.label`
  font-weight: bold;
  margin-bottom: 8px;
`;

const Input = styled.input`
  border: none;
  border-radius: 44px;
  padding: 8px;
  font-size: 16px;
  margin-bottom: 8px;
`;

const Button = styled.button`
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
`;

const Result = styled.h2`
  margin-top: 16px;
`;

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
    ~setWeight('');
  };

  const getBmi = (bmi) => {
    if (bmi < 18.5) return 'Underweight';
    else if (bmi >= 18.5 && bmi < 24.9) return 'Normal Weight';
    else if (bmi >= 24.9 && bmi < 29.9) return 'Overweight';
    else return 'Obese';
  };

  return (
    <Wrapper>
      <Form>
        <InputWrapper>
          <Label htmlFor="height">Height</Label>
          <Input
            type="text"
            placeholder="cm.."
            value={height}
            onChange={(e) => setHeight(e.target.value)}
          />
        </InputWrapper>
        <InputWrapper>
          <Label htmlFor="weight">Weight</Label>
          <Input
            type="text"
            placeholder="kg.."
            value={weight}
            onChange={(e) => setWeight(e.target.value)}
          />
        </InputWrapper>
        <Button type="button" onClick={handleBMI}>
          Calculate BMI
        </Button>
        <Result>Your BMI is: {bmi}</Result>
        <Result>Your weight: {result}</Result>
      </Form>
    </Wrapper>
  );
};

export default CalculatorBMI;
