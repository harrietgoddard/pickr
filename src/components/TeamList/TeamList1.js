import { connect } from 'react-redux';
import TeamList from './TeamList';

const mapStateToProps = ({ playersTeam1, color1, teamsGenerated }) => {

    return { 
        playersTeam: playersTeam1,
        color: color1,
        teamsGenerated, 
    };
    
};

export default connect(mapStateToProps)(TeamList);