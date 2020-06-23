import { connect } from "react-redux";
import Prompt from './Prompt';
import { showTeams } from '../../data/action';

const mapDispatchToProps = dispatch => {
    return {
        handleClick: () => { 
            dispatch(showTeams());
        }
    };
};

export default connect(null, mapDispatchToProps)(Prompt);