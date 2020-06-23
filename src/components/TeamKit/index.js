import React from 'react';

const TeamKit = ({ name, color }) => {

    return (
        <>
            <h2 className="team-title">{ name }</h2>
            <div 
                className="icon-container"
                style={{ background: color }}
            >
                <img 
                    src={require("../../assets/icons/tshirt.svg")} alt="team kit"
                    className="team-kit"
                />
            </div>
        </>
    );

};

export default TeamKit;