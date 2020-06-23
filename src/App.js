import React from 'react';
import './App.scss';
import Header from './components/Header/';
import ControlPanel from './components/ControlPanel/';
import PlayerList from './components/PlayerList/';
import TeamStagingArea from './components/TeamStagingArea';
import Predictions from './components/Predictions/';
import { maxNoOfPlayers, homeAdvantage } from './data/settings';


function App() {
  return (

    <div className="container">

      <Header />

      <ControlPanel max={ maxNoOfPlayers } />

      <PlayerList />

      <TeamStagingArea />

      {/* <Predictions homeAdvantage={ homeAdvantage }/> */}

    </div>

  );
}

export default App;
