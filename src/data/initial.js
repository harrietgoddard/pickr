import { defaultNumberOfPlayers } from './settings';

//set initial state
const initial = {
    numberOfPlayers: defaultNumberOfPlayers,
    tooManyPlayers: false,
    playerInputComplete: false,
    balanced: false,
    players: [],
    playersTeam1: [],
    playersTeam2: [],
    home: 1,
    predictions: {},
};

export default initial;