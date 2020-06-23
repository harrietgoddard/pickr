import { connect } from 'react-redux';
import TeamList from './TeamList';

const mapStateToProps = ({ playersTeam2, color2, teamsComplete }) => {
    return { 
        playersTeam: playersTeam2,
        color: color2,
        teamsComplete, 
    };
};

export default connect(mapStateToProps)(TeamList);