import React from 'react';

const TeamList = ({ playersTeam, color, teamsComplete }) => {

    return (

        !teamsComplete ? null :
   
        <ul className="team-list">
            { playersTeam.map((player, index) => {
                return (
                    <li 
                        className="player-card" 
                        key={ index }
                        style={{ background: color + "80"}}
                    >
                        <p className="text-card">{ player.name }</p>
                        <p className="text-card">Skill - { player.skill }</p>
                    </li>
                )
            })}
        </ul>
           
    );

};

export default TeamList;