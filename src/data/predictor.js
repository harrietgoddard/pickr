/*
* takes a team (an array of player objects) and returns the total skills value
*/

export const totalTeamSkills = team => {
    return team.map(player => player.skill).reduce((total, skill) => total + skill);
};


/*
* returns a new total skills value augmented to reflect the home advantage
*/

export const addHomeAdvantage = totalSkills => {
    let advantage = totalSkills * 0.15;
    return totalSkills + advantage; 
};

export const calculateScores = (team1, team2, home) => {
    let team1Total = home === 1 ? addHomeAdvantage(totalTeamSkills(team1)) : totalTeamSkills(team1);

    let team2Total = home === 2 ? addHomeAdvantage(totalTeamSkills(team2)) : totalTeamSkills(team2);
    
    return {
        team1Total,
        team2Total,
    };
};

/*
* returns 
*/

export const calculateFavourite = scores => {
    return Math.max(scores.team1Total, scores.team2Total) === scores.team1Total ? 1 : 2;
}

// export const calculateFavourite = (team1, team2, home) => {
//     let team1Total = home === 1 ? addHomeAdvantage(totalTeamSkills(team1)) : totalTeamSkills(team1);

//     let team2Total = home === 2 ? addHomeAdvantage(totalTeamSkills(team2)) : totalTeamSkills(team2);
    
//     return Math.max(team1Total, team2Total) === team1Total ? 1 : 2;
// };