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
            <p
            className="text-main"
            >Select mode: { numberOfPlayers }-a-side</p>
            <button 
                onClick={ handleIncrement }
                disabled={ numberOfPlayers === max }
                className="btn-arrow"
            >&#x25B2;</button>
            <button 
                onClick={ handleDecrement }
                disabled={ numberOfPlayers === 1 }
                className="btn-arrow"
            >&#x25BC;</button>
        </div>
    );

};

export default SelectNumber;