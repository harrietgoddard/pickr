import { connect } from 'react-redux';
import TeamList from './TeamList';

const mapStateToProps = ({ playersTeam2 }) => {
    return { 
        playersTeam: playersTeam2 
    };
};

export default connect(mapStateToProps)(TeamList);