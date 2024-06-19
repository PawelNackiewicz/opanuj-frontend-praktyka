import React, { useState } from 'react';
import { add, divide, multiply, subtract } from './functions';

const App = () => {
  const [numA, setNumA] = useState<number>(0);
  const [numB, setNumB] = useState<number>(0);
  const [result, setResult] = useState<number | string>(0);
  const [error, setError] = useState('')

  const calulateResult = (func: (a: number, b: number) => CalculationResult) => {
    const calcResult = func(numA, numB);
    setResult(calcResult.error ? 0 : calcResult.result);
    setError(calcResult.error || '');
  };

  return (
    <div>
      <div className="grid grid-cols-2 gap-x-4">
        <input
          type="number"
          className="rounded-md shadow-md p-4"
          value={numA}
          onChange={(e) => setNumA(parseFloat(e.target.value))}
        />
        <input
          type="number"
          className="rounded-md shadow-md p-4"
          value={numB}
          onChange={(e) => setNumB(parseFloat(e.target.value))}
        />
      </div>
      <div className="grid grid-cols-4 gap-x-4 my-4">
        <Button onClick={() => calulateResult(add)}>+</Button>
        <Button onClick={() => calulateResult(subtract)}>-</Button>
        <Button onClick={() => calulateResult(multiply)}>*</Button>
        <Button onClick={() => calulateResult(divide)}>/</Button>
      </div>
      <div>Result: {result}</div>
      <div>{error}</div>
    </div>
  );
};

export default App;

type ButtonProps = {
  onClick: () => void;
  children: React.ReactNode;
};

const Button = ({ children, onClick }: ButtonProps) => {
  return (
    <button onClick={onClick} className="bg-blue-200 px-2 py-4 text-lg hover:bg-blue-500 hover:text-white rounded-md">
      {children}
    </button>
  );
}

export type CalculationResult = {
  result: number;
  error?: string;
};
