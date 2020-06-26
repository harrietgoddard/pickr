import React from 'react';

const SelectNumber = ({ 
    min,
    max,
    numberOfPlayers,
    handleIncrement, 
    handleDecrement, 
}) => {

    return (
        <div className="select-number">
            <p
            className="text-large"
            >Select mode: { numberOfPlayers }&#8209;a​&#8209;side
            </p>
            <button 
                onClick={ handleIncrement }
                disabled={ numberOfPlayers === max }
                className="btn-small"
            >&#x25B2;</button>
            <button 
                onClick={ handleDecrement }
                disabled={ numberOfPlayers === min }
                className="btn-small"
            >&#x25BC;</button>
        </div>
    );

};

export default SelectNumber;