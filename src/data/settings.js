/*
* default/built in settings
*/

export const defaultNumberOfPlayers = 5;

export const minNoOfPlayers = 2;

export const maxNoOfPlayers = 20;

export const homeAdvantage = 0.15;

export const teamName = team => {
    switch(team) {
        case 1: return "Team 1";
        case 2: return "Team 2";
        default: return "Unnamed team";
    };
};