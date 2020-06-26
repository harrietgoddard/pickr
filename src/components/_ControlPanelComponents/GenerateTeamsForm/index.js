import { connect } from "react-redux";
import GenerateTeamsForm from './GenerateTeamsForm';
import { generateTeams, toggleBalanced } from '../../../data/action';

const mapStateToProps = ({ balanced }) => ({ balanced });

const mapDispatchToProps = dispatch => {

    return {
        handleClick: () => dispatch(generateTeams()),
        handleToggle: () => dispatch(toggleBalanced()),
    };
    
};

export default connect(mapStateToProps, mapDispatchToProps)(GenerateTeamsForm);