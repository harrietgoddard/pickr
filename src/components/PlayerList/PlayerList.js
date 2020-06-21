import React from 'react';

const PlayerList = ({ players, handleClick }) => {

    return (
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
    );

};

export default PlayerList;