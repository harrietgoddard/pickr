import React from 'react';

const PlayerList = ({ players, handleClick }) => {

    return (
        <div className="player-list">
            <ul>
                { players.map((player,index) => {
                    return (
                        <li style={{display:"flex"}} key={ index }>
                            <p>{ player.name }</p>
                            <p>{ player.skill }</p>
                            <button 
                                style={{height:20}}
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