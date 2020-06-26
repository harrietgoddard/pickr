/*
* check whether enough (or too many) players have been added given
* the specified number of players per team
*/

const checkNoOfPlayers = state => {
    
    const currentNoOfPlayers = state.players.length;
    
    //check number of players added is twice that of the number of players per team
    const enoughPlayers = currentNoOfPlayers === state.numberOfPlayers * 2;

    //check if too many players have been added
    const tooManyPlayers = currentNoOfPlayers > state.numberOfPlayers * 2;

    return { 
        ...state, 
        playerInputComplete: enoughPlayers,
        tooManyPlayers, 
    };

};

export default checkNoOfPlayers;