import React from 'react';
import './App.css';
import SelectNumber from './components/SelectNumber/';
import PlayerForm from './components/PlayerForm/';
import PlayerList from './components/PlayerList/';
import Reset from './components/Reset/';
import TeamList1 from './components/TeamList/TeamList1';
import TeamList2 from './components/TeamList/TeamList2';
import GenerateTeams from './components/GenerateTeams/';
import HomeButton1 from './components/HomeButton/HomeButton1';
import HomeButton2 from './components/HomeButton/HomeButton2';
import Predictions from './components/Predictions/';
import { maxNoOfPlayers, homeAdvantage } from './data/settings';
import Prompt from './components/Prompt/';


function App() {
  return (
    <>
      <SelectNumber max={ maxNoOfPlayers } />
      <PlayerForm />
      <GenerateTeams />
      <Prompt />
      <Reset />
      <PlayerList />
      <TeamList1 name="1"/>
      <HomeButton1 />
      <TeamList2 name="2"/>
      <HomeButton2 />
      <Predictions homeAdvantage={ homeAdvantage }/>
    </>
  );
}

export default App;
