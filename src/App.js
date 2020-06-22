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

      <ControlPanel />

      <PlayerList />

      <header className="header-team-1">
        {/* make this a variable: */}
        <h2 className="team-title">Team 1</h2>
      </header> 
      <div className="team-list-1">
        <TeamList1 />
      </div>
      <div className="home-btn-container-1">
        <HomeButton1 />
      </div>

      <header className="header-team-2">
        <h2 className="team-title">Team 2</h2>
      </header>
      <div className="team-list-2">
        <TeamList2 />
      </div>
      <div className="home-btn-container-2">
        <HomeButton2 />
      </div>

      {/* <Predictions homeAdvantage={ homeAdvantage }/> */}

    </div>

  );
}

export default App;
