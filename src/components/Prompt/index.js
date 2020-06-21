import { connect } from "react-redux";
import Prompt from './Prompt';
import { showTeams } from '../../data/action';

const mapStateToProps = ({ teamsComplete }) => ({ teamsComplete });

const mapDispatchToProps = dispatch => {
    return {
        handleClick: () => { 
            dispatch(showTeams());
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Prompt);