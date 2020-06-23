export const changeNumber = value => {
    return {
        type: "CHANGE_NO_OF_PLAYERS",
        value,
    };
};

export const addPlayer = data => {
    return {
        type: "ADD_PLAYER",
        data,
    };
};

export const deletePlayer = index => {
    return {
        type: "DELETE_PLAYER",
        index,
    }
}

export const reset = () => {
    return {
        type: "RESET",
    };
};

export const generateTeams = () => {
    return {
        type: "GENERATE_TEAMS",
    };
};

export const toggleBalanced = () => {
    return {
        type: "TOGGLE_BALANCED",
    };
};

export const toggleHome = () => {
    return {
        type: "TOGGLE_HOME",
    };
};

export const getPredictions = () => {
    return {
        type: "GET_PREDICTIONS",
    };
};

export const showTeams = () => {
    return {
        type: "SHOW_TEAMS",
    };
};

export const setColor1 = data => {
    return {
        type: "SET_COLOR",
        team: 1,
        color: data,
    };
};

export const setColor2 = data => {
    return {
        type: "SET_COLOR",
        team: 2,
        color: data,
    };
};

