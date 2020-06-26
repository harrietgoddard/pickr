/*
* generate teams, depending on whether the user has opted
* for random or balanced team allocation. See teamPicker.js
*/

//logic
import { randomTeams, balancedTeams } from './teamPicker';

const generateTeams = state => {

    const players = state.players;

    const teams = state.balanced ? balancedTeams(players, 2) : randomTeams(players, 2);

    //allocate the resulting array of arrays to teams
    //note that team2 will always have the advantage when teams are balanced
    const team1 = teams[0];
    const team2 = teams[1];

    return {
        ...state,
        playersTeam1: team1,
        playersTeam2: team2,
        teamsGenerated: true,
        players: [],
    };

};

export default generateTeams;