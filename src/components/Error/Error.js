import React from 'react';

const Error = ({ tooManyPlayers }) => {

    return (
        !tooManyPlayers ? null :
        <p
            className="control-message form-label"
        >Delete players</p>
    );

};

export default Error;