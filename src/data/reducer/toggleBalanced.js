/*
* toggle between random and balanced team allocation
*/

const toggleBalanced = state => {
    return {
        ...state,
        balanced: !state.balanced,
    };
};

export default toggleBalanced;