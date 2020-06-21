import React from 'react';

const FormField = ({ 
    name, 
    label, 
    type, 
    value,
    min,
    max,
    step, 
    handleToggle, 
}) => {

    return (
        <div>
            <label htmlFor={ name }>{ label }</label>
            <input 
                id={ name } 
                name={ name }
                type={ type }
                value={ value }
                min={ min }
                max={ max }
                step={ step }
                onClick={ handleToggle }
                required
            />
        </div>
    );

};

export default FormField;