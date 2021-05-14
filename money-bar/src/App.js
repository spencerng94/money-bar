import './App.css';
import React, { useEffect, useState } from 'react';
import Amount from './components/Amount.jsx';
import Error from './components/Error.jsx';
import Bar from './components/Bar.jsx';

function App() {

  let initialAmount = 25000;
  const [ amount, setAmount ] = useState(initialAmount);
  const [ errorPresent, toggleError ] = useState(false);

  useEffect(() => {
    if (amount < 10000 || amount > 30000) {
      toggleError(true);
    } else if (amount >= 10000 && amount <= 30000) {
      toggleError(false);
    }
  }, [amount])

  return (
    <div className="App">
      <header className="App-header">
        <Amount setAmount={setAmount} amount={amount}></Amount>
        <Error errorPresent={errorPresent}></Error>
        <Bar amount={amount} setAmount={setAmount}></Bar>
      </header>
    </div>
  );
}

export default App;
