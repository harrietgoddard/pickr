/*
* toggle between random and balanced teams
*/

const toggleBalanced = state => {

    return {
        ...state,
        balanced: !state.balanced,
    };
    
};

export default toggleBalanced;