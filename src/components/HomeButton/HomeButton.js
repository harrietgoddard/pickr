import React from 'react';

const HomeButton = ({ home, handleClick }) => {

    return (
        <button onClick={ handleClick }>{ home }</button>
    );

};

export default HomeButton;