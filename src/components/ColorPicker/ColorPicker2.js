import { connect } from "react-redux";
import ColorPicker from './ColorPicker';
import { setColor2 } from '../../data/action';

const mapStateToProps = ({ teamsGenerated }) => ({ teamsGenerated });

const mapDispatchToProps = dispatch => {
    return {
        handleColor: data => { 
            dispatch(setColor2(data));
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(ColorPicker);