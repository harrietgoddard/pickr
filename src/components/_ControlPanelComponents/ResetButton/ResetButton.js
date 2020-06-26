import React from 'react';

const ResetButton = ({ handleClick }) => {

    return (
        <button 
            onClick={ handleClick }
            className="btn-medium"
        >Reset</button>
    );

};

export default ResetButton;