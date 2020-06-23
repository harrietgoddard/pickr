import React from 'react';
import ControlPanel from '../ControlPanel/';
import PlayerList from '../PlayerList/';
import TeamStagingArea from '../TeamStagingArea/';
import Predictions from '../Predictions/';
import { maxNoOfPlayers, homeAdvantage } from '../../data/settings';
import Reset from '../Reset/';
import TeamsFinal from '../TeamsFinal';

const Main = ({ teamsConfirmed }) => {

    return (
        <main>

            { !teamsConfirmed ?

                <>

                    <ControlPanel max={ maxNoOfPlayers } />

                    <PlayerList />
            
                    <TeamStagingArea />

                </> :
            
                <>
                    <TeamsFinal />
                    
                    <div className="predictions-container">
                        <Predictions homeAdvantage={ homeAdvantage }/>
                        <Reset />
                    </div>
                </>

            }
            
        </main>
    );

};

export default Main;