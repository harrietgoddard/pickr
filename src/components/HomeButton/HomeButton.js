import React from 'react';

const HomeButton = ({ homeOrAway, handleClick }) => {

    return (
        <button onClick={ handleClick }>{ homeOrAway ? "Home" : "Away" }</button>
    );

};

export default HomeButton;