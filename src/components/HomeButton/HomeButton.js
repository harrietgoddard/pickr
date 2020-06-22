import React from 'react';

const HomeButton = ({ homeOrAway, handleClick }) => {

    return (
        <div className="home-container">
            <p className="text-small">Click to switch</p>
            <button 
            onClick={ handleClick }
            className={homeOrAway ? "btn-large btn-active" : "btn-large"} 
            >{ homeOrAway ? "Home" : "Away" }</button>
        </div>
    );

};

export default HomeButton;