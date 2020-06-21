import React from 'react';
import './App.scss';
import PlayerList from './components/PlayerList/';
import TeamList1 from './components/TeamList/TeamList1';
import TeamList2 from './components/TeamList/TeamList2';
import HomeButton1 from './components/HomeButton/HomeButton1';
import HomeButton2 from './components/HomeButton/HomeButton2';
import Predictions from './components/Predictions/';
import { homeAdvantage } from './data/settings';
import ControlPanel from './components/ControlPanel/';
import Header from './components/Header/';


function App() {
  return (
    <div className="container">
      <Header />
      {/* <ControlPanel />
      <PlayerList />
      <TeamList1 name="1"/>
      <HomeButton1 />
      <TeamList2 name="2"/>
      <HomeButton2 />
      <Predictions homeAdvantage={ homeAdvantage }/> */}
    </div>
  );
}

export default App;
