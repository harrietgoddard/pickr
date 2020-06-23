import React from 'react';
import { CirclePicker } from 'react-color';

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
            <div className="color-picker">
                <p className="form-label">Pick team colour</p>
                    <div className="color-picker-container">
                        <CirclePicker
                        colors={ ["#f44336", "#e91e63", "#9c27b0", "#2196f3", "#03a9f4", "#00bcd4", "#009688", "#4caf50", "#8bc34a", "#cddc39", "#ff9800", "#ff5722", "#795548", "#607d8b"] }
                        circleSize={ 23 }
                        circleSpacing={ 10 }
                        />
                    </div>
            </div>
        </div>
    );

};

export default TeamList;