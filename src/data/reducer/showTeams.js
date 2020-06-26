/*
* shows final teams once confirmed
*/

const showTeams = state => {
    return {
        ...state,
        teamsConfirmed: true,
    };
};

export default showTeams;