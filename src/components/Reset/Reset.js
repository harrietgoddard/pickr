import React from 'react';

const Reset = ({ handleClick }) => {

    return (
        <button 
            onClick={ handleClick }
            className="btn-small"
        >Reset</button>
    );

};

export default Reset;