/*
* teams have been confirmed
*/

const showTeams = state => {

    return {
        ...state,
        teamsConfirmed: true,
    };
    
};

export default showTeams;