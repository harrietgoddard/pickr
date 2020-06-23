import React from 'react';

const PlayerList = ({ players, handleClick }) => {

    return (
        <div className="player-list-container">    
            <ul id="playerList" className="player-list">
                { players.map((player,index) => {
                    return (
                        <li className="player-card" key={ index }>
                            <p className="text-card">{ player.name }</p>
                            <p className="text-card">Skill { player.skill }</p>
                            <button
                                className="btn-delete"
                                onClick={ () => handleClick(index) }
                            >x</button>
                        </li>
                    )
                })}
            </ul>
        </div>
    );

};

export default PlayerList;