import { connect } from 'react-redux';
import PlayerList from './PlayerList';
import { deletePlayer } from '../../data/action';

const mapStateToProps = ({ players }) => ({ players });

const mapDispatchToProps = dispatch => {
    return {
        handleClick: index => { 
            dispatch(deletePlayer(index));
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(PlayerList);