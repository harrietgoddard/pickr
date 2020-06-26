/*
* increase or decrease the number of players per team
*/

const changeNoOfPlayers = (state, { value }) => {
    return {
        ...state,
        numberOfPlayers: state.numberOfPlayers + value,
    };
};

export default changeNoOfPlayers;