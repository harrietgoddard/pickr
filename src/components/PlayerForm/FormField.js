import React from 'react';

const FormField = ({ 
    name, 
    label, 
    type, 
    value,
    min,
    max,
    step,
    disable,
    handleChange, 
}) => {

    return (
        <div>
            <label 
            htmlFor={ name }
            className="text-main"
            >{ label }</label>
            <input 
                id={ name } 
                name={ name }
                type={ type }
                value={ value }
                min={ min }
                max={ max }
                step={ step }
                onChange={ handleChange }
                required
                disabled={ disable }
                className="text-main"
            />
        </div>
    );

};

export default FormField;