import React from 'react';

const SelectNumber = ({ 
    numberOfPlayers, 
    handleIncrement, 
    handleDecrement, 
}) => {

    return (
        <div>
            <p>Select: { numberOfPlayers }-a-side</p>
            <button onClick={ handleIncrement }>+</button>
            <button onClick={ handleDecrement }>-</button>
        </div>
    );

};

export default SelectNumber;