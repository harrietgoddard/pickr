import React from 'react';
import SelectNumber from '../SelectNumber/';
import PlayerForm from '../PlayerForm/';
import GenerateTeams from '../GenerateTeams/';
import Prompt from '../Prompt/';
import Reset from '../Reset/';
import Error from '../Error/';

const ControlPanel = ({ 
    max,
    tooManyPlayers,
    playerInputComplete,
    teamsGenerated, 
}) => {

    return (
        <section className="control-panel">
            
            { teamsGenerated ? null :
                <SelectNumber max={ max }/> 
            }

            { playerInputComplete || tooManyPlayers ? null : 
                <PlayerForm /> 
            }

            { !playerInputComplete || teamsGenerated ? null :
                <GenerateTeams />
            }

            { !tooManyPlayers ? null :
                <Error />
            }

            { !teamsGenerated ? null : 
                <Prompt />
            }

            <Reset />
            
        </section>
    );

};

export default ControlPanel;