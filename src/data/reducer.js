import initialState from './initial';
import { randomTeams, balancedTeams } from './teamPicker';
import { calculateFavourite, calculateScores } from './predictor';

const changeNoOfPlayers = (state, { value }) => {
    return {
        ...state,
        numberOfPlayers: state.numberOfPlayers + value,
    };
};

const addPlayer = (state, { data }) => {
    return {
        ...state,
        players: [...state.players, { name: data.playerName, skill: data.playerSkill }]
    };
};

const checkNoOfPlayers = state => {
    
    const currentNoOfPlayers = state.players.length;
    
    const enoughPlayers = currentNoOfPlayers === state.numberOfPlayers * 2;

    return { ...state, playerInputComplete: enoughPlayers };

};

const generateTeams = state => {

    const players = state.players;

    const teams = state.balanced ? balancedTeams(players, 2) : randomTeams(players, 2);

    const team1 = teams[0];

    const team2 = teams[1];

    return {
        ...state,
        playersTeam1: team1,
        playersTeam2: team2,
    };

};

const toggleBalanced = state => {
    return {
        ...state,
        balanced: !state.balanced,
    };
};

const toggleHome = state => {
    let currentHomeTeam = state.home;
    let newHomeTeam = currentHomeTeam === 1 ? 2 : 1;
    return {
        ...state,
        home: newHomeTeam,
    };
};

const getPredictions = state => {
    
    const { playersTeam1, playersTeam2, home } = state;

    let scores = calculateScores(playersTeam1, playersTeam2, home);

    let favourite = calculateFavourite(scores);

    let favouriteHome = favourite === home;

    let favouriteSkills = favourite === 1 ? scores.team1Total : scores.team2Total;

    let unfavouriteSkills = favourite === 1 ? scores.team2Total : scores.team1Total;

    return {
        ...state,
        predictions: {
            ...state.predictions,
            favourite,
            favouriteHome,
            favouriteSkills,
            unfavouriteSkills,
        }
    }
}

const reducer = (state, action) => {
    switch(action.type) {
        case "CHANGE_NO_OF_PLAYERS": return checkNoOfPlayers(changeNoOfPlayers(state, action));
        case "ADD_PLAYER": return checkNoOfPlayers(addPlayer(state, action));
        case "TOGGLE_BALANCED": return toggleBalanced(state);
        case "GENERATE_TEAMS": return generateTeams(state);
        case "TOGGLE_HOME": return toggleHome(state);
        case "GET_PREDICTIONS": return getPredictions(state);
        case "RESET": return initialState;
        default: return state;
    };
};

export default reducer;