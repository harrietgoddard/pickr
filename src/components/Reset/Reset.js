import React from 'react';

const Reset = ({ handleClick }) => {

    return (
        <button 
            onClick={ handleClick }
            className="reset"
        >Reset</button>
    );

};

export default Reset;