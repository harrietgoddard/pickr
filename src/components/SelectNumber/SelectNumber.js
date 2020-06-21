import React from 'react';

const SelectNumber = ({ 
    max,
    numberOfPlayers,
    teamsComplete, 
    handleIncrement, 
    handleDecrement, 
}) => {

    return (
        teamsComplete ? null :
        <div>
            <p>Select: { numberOfPlayers }-a-side</p>
            <button 
                onClick={ handleIncrement }
                disabled={ numberOfPlayers === max }
            >+</button>
            <button 
                onClick={ handleDecrement }
                disabled={ numberOfPlayers === 1 }
            >-</button>
        </div>
    );

};

export default SelectNumber;