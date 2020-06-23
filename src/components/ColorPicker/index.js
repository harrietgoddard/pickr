import { connect } from "react-redux";
import ColorPicker from './ColorPicker';
import { setColor } from '../../data/action';

const mapDispatchToProps = dispatch => {
    return {
        handleColor: data => { 
            dispatch(setColor(data));
        }
    };
};

export default connect(null, mapDispatchToProps)(ColorPicker);