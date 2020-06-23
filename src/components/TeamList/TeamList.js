import React from 'react';
import ColorPicker from '../ColorPicker/';

const TeamList = ({ playersTeam, teamsComplete }) => {

    return (

        !teamsComplete ? null :

        <div className="team-container">    
            <ul className="team-list">
                { playersTeam.map((player, index) => {
                    return (
                        <li className="player-card" key={ index }>
                            <p className="text-card">{ player.name }</p>
                            <p className="text-card">Skill - { player.skill }</p>
                        </li>
                    )
                })}
            </ul>
            <ColorPicker />
        </div>
    );

};

export default TeamList;