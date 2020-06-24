import React from 'react';
import ControlPanel from '../ControlPanel/';
import PlayerList from '../PlayerList/';
import TeamStaging from '../TeamStaging/';
import Predictions from '../Predictions/';
import { minNoOfPlayers, maxNoOfPlayers, homeAdvantage } from '../../data/settings';
import ResetButton from '../_ControlPanelComponents/ResetButton';
import TeamConfirmed from '../TeamConfirmed';

const Main = ({ teamsConfirmed }) => {

    return (
        <main>

            { !teamsConfirmed ?

                <>

                    <ControlPanel 
                        max={ maxNoOfPlayers }
                        min={ minNoOfPlayers } 
                    />

                    <PlayerList />
            
                    <TeamStaging />

                </> :
            
                <>
                    <TeamConfirmed />
                    
                    <div className="predictions-container">
                        <Predictions homeAdvantage={ homeAdvantage }/>
                        <ResetButton />
                    </div>
                </>

            }
            
        </main>
    );

};

export default Main;