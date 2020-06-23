import React from 'react';
import ControlPanel from '../ControlPanel/';
import PlayerList from '../PlayerList/';
import TeamStagingArea from '../TeamStagingArea/';
import Predictions from '../Predictions/';
import { maxNoOfPlayers, homeAdvantage } from '../../data/settings';

const Main = ({ teamsConfirmed }) => {

    return (
        <main>

            { !teamsConfirmed ?

                <>

                    <ControlPanel max={ maxNoOfPlayers } />

                    <PlayerList />
            
                    <TeamStagingArea />

                </> :
            
                <Predictions homeAdvantage={ homeAdvantage }/>

            }
            
        </main>
    );

};

export default Main;