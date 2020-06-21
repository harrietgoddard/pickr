import React from 'react';

const GenerateTeams = ({ playerInputComplete, handleClick }) => {

    return (
        !playerInputComplete ? null :
        <div>
            <button onClick={ handleClick }>Generate teams</button>
        </div>
    );

};

export default GenerateTeams;