import React from 'react';

const Error = ({ tooManyPlayers }) => {

    return (
        !tooManyPlayers ? null :
        <div className="control-message">
            <p
                className="form-label"
            >Delete players</p>
            <p className="arrow bounce-down">&#8595;</p>
        </div>
    );

};

export default Error;