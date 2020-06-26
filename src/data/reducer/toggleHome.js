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

export default toggleHome;