import { calculateFavourite, calculateScores } from './predictor';

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
    let favouriteSkills = favourite === 1 ? scores.team1Total.toFixed(2) : scores.team2Total.toFixed(2);

    //returns the other team's total skills value
    let unfavouriteSkills = favourite === 1 ? scores.team2Total.toFixed(2) : scores.team1Total.toFixed(2);

    return {
        ...state,
        predictions: {
            ...state.predictions,
            favourite,
            unfavourite,
            favouriteHome,
            favouriteSkills,
            unfavouriteSkills,
        },
        showPredictions: true,
    };
};

export default getPredictions;