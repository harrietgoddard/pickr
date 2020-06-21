import { connect } from "react-redux";
import HomeButton from './HomeButton';
import { toggleHome } from '../../data/action';

const mapStateToProps = ({ home }) => ({ homeOrAway: home === 2 });

const mapDispatchToProps = dispatch => {
    return {
        handleClick: () => { 
            dispatch(toggleHome());
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(HomeButton);