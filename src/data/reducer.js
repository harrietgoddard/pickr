import initialState from './initial';
import { randomTeams, balancedTeams } from './teamPicker';
import { calculateFavourite, calculateScores } from './predictor';


/*
* increase or decrease the number of players per team
*/

const changeNoOfPlayers = (state, { value }) => {
    return {
        ...state,
        numberOfPlayers: state.numberOfPlayers + value,
    };
};


/*
* add a player (name and skill)
*/

const addPlayer = (state, { data }) => {
    return {
        ...state,
        players: [
            ...state.players, 
            { name: data.playerName, skill: data.playerSkill }
        ]
    };
};


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


/*
* check whether enough players have been added given
* the specified number of players per team
*/

const checkNoOfPlayers = state => {
    
    const currentNoOfPlayers = state.players.length;
    
    //check number of players added is twice that of the number of players per team
    const enoughPlayers = currentNoOfPlayers === state.numberOfPlayers * 2;

    return { ...state, playerInputComplete: enoughPlayers };

};


/*
* generate teams, depending on whether the user has opted
* for random or balanced team allocation. See teamPicker.js
*/

const generateTeams = state => {

    const players = state.players;

    const teams = state.balanced ? balancedTeams(players, 2) : randomTeams(players, 2);

    //allocate the resulting array of arrays to teams
    //***this needs to be randomised***
    const team1 = teams[0];
    const team2 = teams[1];

    return {
        ...state,
        playersTeam1: team1,
        playersTeam2: team2,
    };

};


/*
* toggle between random and balanced team allocation
*/

const toggleBalanced = state => {
    return {
        ...state,
        balanced: !state.balanced,
    };
};


/*
* toggle the home team
*/

const toggleHome = state => {
    let currentHomeTeam = state.home;
    let newHomeTeam = currentHomeTeam === 1 ? 2 : 1;
    return {
        ...state,
        home: newHomeTeam,
    };
};


/*
* calculate the favourite team, whether the favourite team
* had the home advantage, the favourite team's total
* skills value and the other team's total skills value.
* See predictor.js
*/

const getPredictions = state => {
    
    const { playersTeam1, playersTeam2, home } = state;

    //returns an object containing the teams total skills values
    let scores = calculateScores(playersTeam1, playersTeam2, home);

    //returns a number representing the favourite team
    let favourite = calculateFavourite(scores);

    //the 'unfavourite' team
    let unfavourite = favourite === 1 ? 2 : 1;

    //did the favourite benefit from a home advantage
    let favouriteHome = favourite === home;

    //returns the favourite team's total skills value
    let favouriteSkills = favourite === 1 ? scores.team1Total : scores.team2Total;

    //returns the other team's total skills value
    let unfavouriteSkills = favourite === 1 ? scores.team2Total : scores.team1Total;

    return {
        ...state,
        predictions: {
            ...state.predictions,
            favourite,
            unfavourite,
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
        case "DELETE_PLAYER": return checkNoOfPlayers(deletePlayer(state, action));
        case "TOGGLE_BALANCED": return toggleBalanced(state);
        case "GENERATE_TEAMS": return generateTeams(state);
        case "TOGGLE_HOME": return toggleHome(state);
        case "GET_PREDICTIONS": return getPredictions(state);
        case "RESET": return initialState;
        default: return state;
    };
};

export default reducer;