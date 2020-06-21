import React from 'react';

const Prompt = ({ teamsComplete, handleClick }) => {

    return (
        !teamsComplete ? null :
        <div>
            <p>&#60; Customise teams &#62;</p>
            <button onClick={ handleClick }>Kick off</button>
        </div>
    );

};

export default Prompt;