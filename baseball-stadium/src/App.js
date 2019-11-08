import React, { useState } from 'react';
import './App.css';
import Dashboard from "./components/Dashboard";
import Display from "./components/Display"; 

function App() {
  const [strikes, setStrikes] = useState(0);
  const [balls, setBalls] = useState(0);

  const strike = () => {
    if (strikes === 3) {
      setStrikes(0);
      setBalls(0) 
      } else {
        setStrikes(strikes +1)
      }
    }
  

  const ball = () => {
    if (balls === 4) {
      setStrikes(0);
      setBalls(0);
    } else {
      setBalls(balls + 1)
    }
  }
  
  return (
    <div className="App">
      <header className="App-header">
      <h1> Baseball Batter Score </h1>
      <p> Web Testing </p>
      <Display balls={balls} strikes={strikes} />
      <Dashboard strike={strike} ball={ball} />
      </header>
    </div>
  );
}

export default App;
