import React from 'react';
import './App.css';
import SelectNumber from './components/SelectNumber/';
import PlayerForm from './components/PlayerForm/';
import PlayerList from './components/PlayerList/';

const maxNoOfPlayers = 20;

function App() {
  return (
    <>
      <SelectNumber max={ maxNoOfPlayers } />
      <PlayerForm />
      <PlayerList />
    </>
  );
}

export default App;
