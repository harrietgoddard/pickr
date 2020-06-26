//initial state
import initialState from '../initial';

//reducer functions
import changeNoOfPlayers from './changeNoOfPlayers';
import addPlayer from './addPlayer';
import deletePlayer from './deletePlayer';
import checkNoOfPlayers from './checkNoOfPlayers';
import generateTeams from './generateTeams';
import toggleBalanced from './toggleBalanced';
import toggleHome from './toggleHome';
import getPredictions from './getPredictions';
import showTeams from './showTeams';
import setColor from './setColor';


//reducer
const reducer = (state, action) => {
    switch(action.type) {
        
        case "CHANGE_NO_OF_PLAYERS": return checkNoOfPlayers(changeNoOfPlayers(state, action));

        case "ADD_PLAYER": return checkNoOfPlayers(addPlayer(state, action));

        case "DELETE_PLAYER": return checkNoOfPlayers(deletePlayer(state, action));

        case "TOGGLE_BALANCED": return toggleBalanced(state);

        case "GENERATE_TEAMS": return generateTeams(state);

        case "TOGGLE_HOME": return toggleHome(state);

        case "GET_PREDICTIONS": return getPredictions(state);

        case "SHOW_TEAMS": return showTeams(state);

        case "SET_COLOR": return setColor(state, action);

        case "RESET": return initialState;

        default: return state;

    };
};

export default reducer;