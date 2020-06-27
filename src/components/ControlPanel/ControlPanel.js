import React from 'react';
import SelectNumber from '../_ControlPanelComponents/SelectNumber/';
import PlayerForm from '../PlayerForm/';
import GenerateTeamsForm from '../_ControlPanelComponents/GenerateTeamsForm';
import ConfirmButton from '../_ControlPanelComponents/ConfirmButton';
import ResetButton from '../_ControlPanelComponents/ResetButton';
import ErrorMessage from '../_ControlPanelComponents/ErrorMessage';

const ControlPanel = ({ 
    min,
    max,
    tooManyPlayers,
    playerInputComplete,
    teamsGenerated, 
}) => {

    return (
        <section className="control-panel">
            
            {/* show option to change no. of players per team before teams are generated*/}
            { teamsGenerated ? null :
                <SelectNumber max={ max } min={ min }/> 
            }

            {/* show the add players form unless enough players have been added or too many players have been added */}
            { playerInputComplete || tooManyPlayers ? null : 
                <PlayerForm /> 
            }

            {/* show 'generate teams' button when enough players have been added, and then hide when teams have been generated */}
            { !playerInputComplete || teamsGenerated ? null :
                <GenerateTeamsForm />
            }

            {/* show 'delete players' message when too many players have been added */}
            { !tooManyPlayers ? null :
                <ErrorMessage />
            }

            {/* show 'confirm teams' button after teams have been generated */}
            { !teamsGenerated ? null : 
                <ConfirmButton />
            }
            
            <div className="reset-control-panel">
                <ResetButton />
            </div>
            
        </section>
    );

};

export default ControlPanel;