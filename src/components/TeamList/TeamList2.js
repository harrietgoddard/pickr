import { connect } from 'react-redux';
import TeamList from './TeamList';

const mapStateToProps = ({ playersTeam2, teamsComplete }) => {
    return { 
        playersTeam: playersTeam2,
        teamsComplete, 
    };
};

export default connect(mapStateToProps)(TeamList);