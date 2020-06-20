import React from 'react';

const PlayerList = ({ players }) => {

    return (
        <ul>
            { players.map((player,index) => {
                return (
                    <li key={ index }>
                        <p>{ player.name }</p>
                        <p>{ player.skill }</p>
                    </li>
                )
            })}
        </ul>
    );

};

export default PlayerList;