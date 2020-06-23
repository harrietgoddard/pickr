import React from 'react';
import FormField from './FormField';

const GenerateTeams = ({ balanced, handleClick, handleToggle }) => {

    return (
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