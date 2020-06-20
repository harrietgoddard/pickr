import { connect } from 'react-redux';
import SelectNumber from './SelectNumber';
import { increment, decrement } from '../../data/action';

const mapStateToProps = ({ numberOfPlayers }) => ({ numberOfPlayers });

const maptDispatchToProps = dispatch => {
    return {
        handleIncrement: () => dispatch(increment()),
        handleDecrement: () => dispatch(decrement()),
    }
}

export default connect(mapStateToProps, maptDispatchToProps)(SelectNumber);