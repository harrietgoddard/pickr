import React from 'react';

const TeamList = ({ playersTeam, name }) => {

    return (
            <ul>
                {/* remove this */}
                <h3>team {name}</h3>
                { playersTeam.map((player, index) => {
                    return (
                        <li style={{display:"flex"}} key={ index }>
                            <p>{ player.name }</p>
                            <p>{ player.skill }</p>
                        </li>
                    )
                })}
            </ul>
    );

};

export default TeamList;