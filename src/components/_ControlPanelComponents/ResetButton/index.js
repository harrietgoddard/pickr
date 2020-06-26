import { connect } from "react-redux";
import ResetButton from './ResetButton';
import { reset } from '../../../data/action';

const mapDispatchToProps = dispatch => {

    return {
        handleClick: () => { 
            dispatch(reset());
        }
    };
    
};

export default connect(null, mapDispatchToProps)(ResetButton);