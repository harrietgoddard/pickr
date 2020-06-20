import React from 'react';
import './App.css';
import SelectNumber from './components/SelectNumber/';
import PlayerForm from './components/PlayerForm/';
import PlayerList from './components/PlayerList/';
import Reset from './components/Reset/';
import TeamList1 from './components/TeamList/TeamList1';
import TeamList2 from './components/TeamList/TeamList2';

const maxNoOfPlayers = 20;

function App() {
  return (
    <>
      <SelectNumber max={ maxNoOfPlayers } />
      <PlayerForm />
      <Reset />
      <PlayerList />
      <TeamList1 name="1"/>
      <TeamList2 name="2"/>
    </>
  );
}

export default App;
