import React from 'react';

const Reset = ({ handleClick }) => {

    return (
        <button 
            onClick={ handleClick }
            className="btn-small btn-reset"
        >Reset</button>
    );

};

export default Reset;