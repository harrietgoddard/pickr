import React, { Component } from 'react';

class PlayerList extends Component  {

    //to keep the player list scroll bar at the bottom of the container when adding players
    componentDidUpdate() {
        
        const { playerList } = this.refs;
        
        playerList.scrollTop = playerList.scrollHeight - playerList.clientHeight;
    }

    render() {
        
        const { players, handleClick } = this.props;

        return (
            <section>
                <div className="player-list-container">    
                    <ul ref="playerList" className="player-list">
                        { players.map((player,index) => {
                            return (
                                <li className="player-card" key={ index }>
                                    <p className="text-card">{ player.name }</p>
                                    <p className="text-card">skill - { player.skill }</p>
                                    <button
                                        className="btn-xsmall btn-delete"
                                        onClick={ () => handleClick(index) }
                                    >x</button>
                                </li>
                            )
                        })}
                    </ul>
                </div>
            </section>
        );
    };

};

export default PlayerList;