import { connect } from "react-redux";
import GenerateTeams from './GenerateTeams';
import { generateTeams } from '../../data/action';

const mapDispatchToProps = dispatch => {
    return {
        handleClick: () => { 
            dispatch(generateTeams());
        }
    };
};

export default connect(null, mapDispatchToProps)(GenerateTeams);