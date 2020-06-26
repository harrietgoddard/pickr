import React from 'react';
import FormField from './FormField';

const GenerateTeamsForm = ({ balanced, handleClick, handleToggle }) => {

    return (
        <form className="form-generate">
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
                className="btn-medium btn-generate"
            >Generate teams</button>
        </form>
    );

};

export default GenerateTeamsForm;