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
    inputClass,
    containerClass,
    handleChange, 
}) => {

    return (
        <div className={ containerClass }>
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
                onChange={ handleChange }
                required
                disabled={ disable }
                className={ inputClass }
            />
        </div>
    );

};

export default FormField;