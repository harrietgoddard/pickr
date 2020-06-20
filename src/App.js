import React from 'react';
import './App.css';
import SelectNumber from './components/SelectNumber/';
import PlayerForm from './components/PlayerForm/';

const maxNoOfPlayers = 20;

function App() {
  return (
    <>
      <SelectNumber max={ maxNoOfPlayers } />
      <PlayerForm />
    </>
  );
}

export default App;
