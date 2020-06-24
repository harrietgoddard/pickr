import React from 'react';

const TeamList = ({ playersTeam, color, teamsGenerated }) => {

    return (

        !teamsGenerated ? null :
   
        <ul className="team-list">
            { playersTeam.map((player, index) => {
                return (
                    <li 
                        className="player-card" 
                        key={ index }
                        style={{ backgroundColor: color + "80"}}
                    >
                        <p className="text-card">{ player.name }</p>
                        <p className="text-card">skill - { player.skill }</p>
                    </li>
                )
            })}
        </ul>
           
    );

};

export default TeamList;