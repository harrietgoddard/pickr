import { connect } from 'react-redux';
import PlayerList from './PlayerList';

const mapStateToProps = ({ players }) => ({ players });

export default connect(mapStateToProps)(PlayerList);