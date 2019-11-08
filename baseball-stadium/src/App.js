import React, { useState } from 'react';
import './App.css';
import Dashboard from "./components/Dashboard";
import Display from "./components/Display"; 

function App() {
  const [strikes, setStrikes] = useState(0);
  const [balls, setBalls] = useState(0);

  const strike = () => {
    if (strikes === 2) {
      setStrikes(0);
      setBalls(0) 
      } else {
        setStrikes(strikes +1)
      }
    }
  

  const ball = () => {
    if (balls === 3) {
      setStrikes(0);
      setBalls(0);
    } else {
      setBalls(balls + 1)
    }
  }

  const foul = () => {
    if (strikes === 2) {
      setStrikes(2)
    } else {
      setStrikes( strikes + 1)
    }
  }

  const hit = () => {
    setStrikes(0)
    setBalls(0)
  }
  
  return (
    <div className="App">
      <header className="App-header">
      <h1> Baseball Batter Score </h1>
      <p> Web Testing </p>
      <Display balls={balls} strikes={strikes} foul={foul} />
      <Dashboard strike={strike} ball={ball} foul={foul} hit={hit} />
      </header>
    </div>
  );
}

export default App;
