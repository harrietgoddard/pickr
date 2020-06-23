import { connect } from 'react-redux';
import TeamList from './TeamList';

const mapStateToProps = ({ playersTeam2, color2, teamsGenerated }) => {
    return { 
        playersTeam: playersTeam2,
        color: color2,
        teamsGenerated, 
    };
};

export default connect(mapStateToProps)(TeamList);