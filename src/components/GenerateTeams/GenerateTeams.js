import React from 'react';
import FormField from './FormField';

const GenerateTeams = ({ playerInputComplete, balanced, handleClick, handleToggle }) => {

    return (
        !playerInputComplete ? null :
        <div>
            <FormField 
                name={ "team-picker-type" }
                label={ "Balance teams by skill (default random)" }
                type={ "checkbox" }
                value={ balanced }
                handleToggle={ handleToggle }
            />
            <button onClick={ handleClick }>Generate teams</button>
        </div>
    );

};

export default GenerateTeams;