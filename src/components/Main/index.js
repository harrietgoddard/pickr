import { connect } from 'react-redux';
import Main from './Main';

const mapStateToProps = ({ teamsConfirmed }) => ({ teamsConfirmed });

export default connect(mapStateToProps)(Main);