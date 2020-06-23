import { connect } from "react-redux";
import GenerateTeams from './GenerateTeams';
import { generateTeams, toggleBalanced } from '../../data/action';

const mapStateToProps = ({ balanced }) => ({ balanced });

const mapDispatchToProps = dispatch => {
    return {
        handleClick: () => dispatch(generateTeams()),
        handleToggle: () => dispatch(toggleBalanced()),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(GenerateTeams);