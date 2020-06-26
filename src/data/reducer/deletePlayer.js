/*
* delete a player
*/

const deletePlayer = (state, action) => {
    
    //returns array of players excluding the index specified in the action payload
    let newPlayers = state.players.filter((player, index) => {

        return index !== action.index;

    });
    
    return {
        ...state,
        players: newPlayers,
    };
};

export default deletePlayer;