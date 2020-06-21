import React from 'react';

const TeamList = ({ playersTeam }) => {

    return (
            <ul>
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