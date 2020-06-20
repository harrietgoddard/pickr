import React from 'react';

const Button = ({ handleClick }) => {

    return (
        <button onClick={ handleClick }>Reset</button>
    );

};

export default Button;