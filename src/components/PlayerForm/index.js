import { connect } from "react-redux";
import PlayerForm from './PlayerForm';
import { addPlayer } from '../../data/action';

const mapStateToProps = ({ playerInputComplete, tooManyPlayers }) => ({ playerInputComplete, tooManyPlayers });

const mapDispatchToProps = dispatch => {
    return {
        handleSubmit: data => { 
            dispatch(addPlayer(data));
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(PlayerForm);