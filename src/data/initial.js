import { defaultNumberOfPlayers } from './settings';

//set initial state
const initial = {
    numberOfPlayers: defaultNumberOfPlayers,
    tooManyPlayers: false,

    playerInputComplete: false,
    teamsComplete: false,
    gameStarted: false,

    balanced: false,

    players: [],
    playersTeam1: [],
    playersTeam2: [],

    color1: "",
    color2: "",

    home: 1,
    predictions: {},
};

export default initial;