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

const reducer = (state, action) => {
    switch(action.type) {
        case "CHANGE_NO_OF_PLAYERS": return changeNoOfPlayers(state, action);
        case "ADD_PLAYER": return addPlayer(state, action);
        default: return state;
    };
};

export default reducer;