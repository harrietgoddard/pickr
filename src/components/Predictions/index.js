import { connect } from "react-redux";
import Predictions from './Predictions';
import { getPredictions } from '../../data/action';

const mapDispatchToProps = dispatch => {
    return {
        handleClick: () => { 
            dispatch(getPredictions());
        }
    };
};

export default connect(null, mapDispatchToProps)(Predictions);