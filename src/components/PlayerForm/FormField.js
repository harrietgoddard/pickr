import React from 'react';

const FormField = ({ name, label, type, value }) => {

    return (
        <div>
            <label htmlFor={ name }>{ label }</label>
            <input 
                id={ name } 
                name={ name }
                type={ type }
                value={ value }
            />
        </div>
    );

};

export default FormField;