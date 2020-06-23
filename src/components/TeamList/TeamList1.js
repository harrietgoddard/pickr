import { connect } from 'react-redux';
import TeamList from './TeamList';

const mapStateToProps = ({ playersTeam1, color1, teamsComplete }) => {
    return { 
        playersTeam: playersTeam1,
        color: color1,
        teamsComplete, 
    };
};

export default connect(mapStateToProps)(TeamList);