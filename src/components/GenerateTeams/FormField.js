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
        <div className="control-message">
            <label 
                htmlFor={ name }
                className="form-label"
            >{ label }</label>
            <input 
                id={ name } 
                name={ name }
                type={ type }
                value={ value }
                min={ min }
                max={ max }
                step={ step }
                checked={ value }
                onChange={ handleToggle }
                required
            />
        </div>
    );

};

export default FormField;