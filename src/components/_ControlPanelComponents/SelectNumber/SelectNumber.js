import React from 'react';

const SelectNumber = ({ 
    min,
    max,
    numberOfPlayers,
    handleIncrement, 
    handleDecrement, 
}) => {

    return (
        <div className="control-number">
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
                disabled={ numberOfPlayers === min }
                className="btn-arrow"
            >&#x25BC;</button>
        </div>
    );

};

export default SelectNumber;