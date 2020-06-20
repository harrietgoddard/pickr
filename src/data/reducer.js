const changeNoOfPlayers = (state, { value }) => {
    return {
        ...state,
        numberOfPlayers: state.numberOfPlayers + value,
    };
};

const addPlayer = (state, { data }) => {
    return {
        ...state,
        players: [...state.players, {name: data.playerName, skill: data.playerSkill}]
    };
};

const checkNoOfPlayers = state => {
    
    const currentNoOfPlayers = state.players.length;
    
    const enoughPlayers = currentNoOfPlayers === state.numberOfPlayers * 2;

    return { ...state, playerInputComplete: enoughPlayers };

};

const reducer = (state, action) => {
    switch(action.type) {
        case "CHANGE_NO_OF_PLAYERS": return checkNoOfPlayers(changeNoOfPlayers(state, action));
        case "ADD_PLAYER": return checkNoOfPlayers(addPlayer(state, action));
        default: return state;
    };
};

export default reducer;