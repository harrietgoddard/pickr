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
            
            { teamsGenerated ? null :
                <SelectNumber max={ max } min={ min }/> 
            }

            { playerInputComplete || tooManyPlayers ? null : 
                <PlayerForm /> 
            }

            { !playerInputComplete || teamsGenerated ? null :
                <GenerateTeamsForm />
            }

            { !tooManyPlayers ? null :
                <ErrorMessage />
            }

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