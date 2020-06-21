export const changeNumber = value => {
    return {
        type: "CHANGE_NO_OF_PLAYERS",
        value: value,
    };
};

export const addPlayer = data => {
    return {
        type: "ADD_PLAYER",
        data: data,
    };
};

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

