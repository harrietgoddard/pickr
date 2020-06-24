import { connect } from "react-redux";
import Predictions from './Predictions';
import { getPredictions } from '../../data/action';

const mapStateToProps = ({ predictions, showPredictions }) => ({ predictions, showPredictions });

const mapDispatchToProps = dispatch => {
    return {
        handleClick: () => { 
            dispatch(getPredictions());
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Predictions);