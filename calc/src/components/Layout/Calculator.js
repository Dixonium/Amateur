import React, { useState } from 'react';
import Display from './Display'; // Ensure Display component is implemented
import Button from './Button';   // Ensure Button component is implemented
import './Calculator.css';       // Optional: Add styles

const Calculator = () => {
  const [input, setInput] = useState('');  // Stores user input
  const [result, setResult] = useState(''); // Stores calculation result

  const handleButtonClick = (value) => {
    if (value === 'C') {
      setInput('');  // Clear input
      setResult(''); // Clear result
    } else if (value === '=') {
      try {
        // Evaluate the expression and update result
        const evalResult = eval(input); // Note: Avoid eval in production apps
        setResult(evalResult);
      } catch (error) {
        setResult('Error'); // Display error for invalid expressions
      }
    } else {
      setInput((prev) => prev + value); // Append button value to input
    }
  };

  const buttons = [
    '7', '8', '9', '/',
    '4', '5', '6', '*',
    '1', '2', '3', '-',
    '0', '.', '=', '+',
    'C'
  ];

  return (
    <div className="calculator">
      <Display currentValue={input} result={result} />
      <div className="button-grid">
        {buttons.map((btn) => (
          <Button key={btn} label={btn} onClick={() => handleButtonClick(btn)} />
        ))}
      </div>
    </div>
  );
};

export default Calculator;
