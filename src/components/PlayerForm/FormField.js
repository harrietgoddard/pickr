import React from 'react';

const FormField = ({ 
    name, 
    label, 
    type, 
    value, 
    handleChange, 
}) => {

    return (
        <div>
            <label htmlFor={ name }>{ label }</label>
            <input 
                id={ name } 
                name={ name }
                type={ type }
                value={ value }
                onChange={ handleChange }
            />
        </div>
    );

};

export default FormField;