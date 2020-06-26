import { connect } from "react-redux";
import ConfirmButton from './ConfirmButton';
import { showTeams } from '../../../data/action';

const mapDispatchToProps = dispatch => {

    return {
        handleClick: () => { 
            dispatch(showTeams());
        }
    };
    
};

export default connect(null, mapDispatchToProps)(ConfirmButton);