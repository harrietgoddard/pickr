import React from 'react';

const TeamKit = ({ name, color, home }) => {

    let homeOrAway = home ? "H" : "A";

    return (
        <>
            <h2 className="title-sub">
                { name + " (" + homeOrAway + ")" }
            </h2>

            <div 
                className="icon-container"
                style={{ backgroundColor: color }}
            >

                <img 
                    src={require("../../assets/icons/tshirt.svg")} 
                    alt="team kit"
                    className="icon"
                />

            </div>
        </>
    );

};

export default TeamKit;