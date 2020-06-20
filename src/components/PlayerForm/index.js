import React from 'react';
import FormField from './FormField';

const PlayerForm = () => {

    return (
        <div>
            <FormField
                name={ "player-name" }
                label={ "Enter player names" }
                type={ "text" }
                value={ "placeholder value" }
            />
        </div>
    );

};

export default PlayerForm;