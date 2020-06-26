/*
* sets team colours
*/

const setColor = (state, { team, color }) => {
    
    let color1 = team === 1 ? color : state.color1;

    let color2 = team === 2 ? color : state.color2;
    
    return {
        ...state,
        color1,
        color2,
    };
};

export default setColor;