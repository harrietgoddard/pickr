const changeNoOfPlayers = (state, { value }) => {
    return {
        ...state,
        numberOfPlayers: state.numberOfPlayers + value,
    };
};

const reducer = (state, action) => {
    switch(action.type) {
        case "CHANGE_NO_OF_PLAYERS": return changeNoOfPlayers(state, action);
        default: return state;
    };
};

export default reducer;