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
                //show this before teams are confirmed
                <>

                    <ControlPanel 
                        max={ maxNoOfPlayers }
                        min={ minNoOfPlayers } 
                    />

                    <PlayerList />
            
                    <TeamStaging />

                </> :
                //show this after teams have been confirmed
                <>
                    <TeamConfirmed />
                    
                    <div className="predictions-container">

                        <Predictions homeAdvantage={ homeAdvantage }/>
                        
                        <div className="reset-final">
                            <ResetButton />
                        </div>
                        
                    </div>

                </>

            }
            
        </main>
    );

};

export default Main;