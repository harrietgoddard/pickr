import React from 'react';

const ResetButton = ({ handleClick }) => {

    return (
        <button 
            onClick={ handleClick }
            className="btn-medium btn-reset"
        >Reset</button>
    );

};

export default ResetButton;