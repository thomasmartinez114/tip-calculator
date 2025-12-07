import { useState } from 'react';

function App() {
  return (
    <div>
      <TipCalculator />
    </div>
  );
}

function TipCalculator() {
  const [bill, setBill] = useState('');
  const [percentageOne, setPercentageOne] = useState(0);
  const [percentageTwo, setPercentageTwo] = useState(0);

  const tip = bill * ((percentageOne + percentageTwo) / 2 / 100);

  function handleReset() {
    setBill('');
    setPercentageOne(0);
    setPercentageTwo(0);
  }

  return (
    <div>
      <BillInput bill={bill} onSetBill={setBill} />
      <SelectPercentage percentage={percentageOne} onSelect={setPercentageOne}>
        How did you like the service?
      </SelectPercentage>
      <SelectPercentage percentage={percentageTwo} onSelect={setPercentageTwo}>
        How did your friend like the service?
      </SelectPercentage>

      {bill > 0 && (
        <>
          <Output bill={bill} tip={tip} />
          <Reset onReset={handleReset} />
        </>
      )}
    </div>
  );
}

function BillInput({ bill, onSetBill }) {
  return (
    <div>
      <label>How much was the bill?</label>
      <input
        type='text'
        placeholder='Bill walue'
        value={bill}
        onChange={e => onSetBill(Number(e.target.value))}
      />
    </div>
  );
}

function SelectPercentage({ children, percentage, onSelect }) {
  return (
    <div>
      <label>{children}</label>
      <select
        value={percentage}
        onChange={e => onSelect(Number(e.target.value))}
      >
        <option value='0'>Dissastisfied (0%)</option>
        <option value='5'>It was okay (5%)</option>
        <option value='10'>It was good (10%)</option>
        <option value='20'>It was excellent (20%)</option>
      </select>
    </div>
  );
}

function Output({ bill, tip }) {
  return (
    <h3>
      You pay ${bill + tip} (${bill} + ${tip} tip)
    </h3>
  );
}

function Reset({ onReset }) {
  return <button onClick={onReset}>Reset</button>;
}

export default App;
