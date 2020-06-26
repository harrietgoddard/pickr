import { defaultNumberOfPlayers } from './settings';

//set initial state
const initial = {
    numberOfPlayers: defaultNumberOfPlayers,
    tooManyPlayers: false,

    playerInputComplete: false,
    balanced: false,
    teamsGenerated: false,
    teamsConfirmed: false,

    players: [],
    playersTeam1: [],
    playersTeam2: [],

    color1: "",
    color2: "",
    home: 1,

    showPredictions: false,
    predictions: {},
};

export default initial;