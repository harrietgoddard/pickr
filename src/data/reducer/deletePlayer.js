/*
* delete a player
*/

const deletePlayer = (state, action) => {
    
    let newPlayers = state.players.filter((player, index) => {
        return index !== action.index;
    });
    
    return {
        ...state,
        players: newPlayers,
    };
};

export default deletePlayer;