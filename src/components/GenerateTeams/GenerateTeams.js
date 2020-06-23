import React from 'react';
import FormField from './FormField';

const GenerateTeams = ({ playerInputComplete, teamsGenerated, balanced, handleClick, handleToggle }) => {

    return (
        !playerInputComplete || teamsGenerated ? null :
        <form>
            <FormField 
                name={ "team-picker-type" }
                label={ "Balance teams by skill?" }
                type={ "checkbox" }
                value={ balanced }
                handleToggle={ handleToggle }
            />
            <button
                type="button" 
                onClick={ handleClick }
                className="btn-small btn-generate"
            >Generate teams</button>
        </form>
    );

};

export default GenerateTeams;