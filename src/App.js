import React from 'react';
import './App.css';
import SelectNumber from './components/SelectNumber/';

const maxNoOfPlayers = 20;

function App() {
  return (
    <SelectNumber max={ maxNoOfPlayers }/>
  );
}

export default App;
