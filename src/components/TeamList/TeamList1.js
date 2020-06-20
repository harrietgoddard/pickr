import { connect } from 'react-redux';
import TeamList from './TeamList';

const mapStateToProps = ({ playersTeam1 }) => {
    return { 
        playersTeam: playersTeam1 
    };
};

export default connect(mapStateToProps)(TeamList);