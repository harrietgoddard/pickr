import { connect } from 'react-redux';
import SelectNumber from './SelectNumber';
import { changeNumber } from '../../../data/action';

const mapStateToProps = ({ numberOfPlayers }) => ({ numberOfPlayers });

const mapDispatchToProps = dispatch => {

    return {
        handleIncrement: () => dispatch(changeNumber(1)),
        handleDecrement: () => dispatch(changeNumber(-1)),
    };
    
};

export default connect(mapStateToProps, mapDispatchToProps)(SelectNumber);