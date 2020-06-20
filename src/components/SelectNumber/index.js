import { connect } from 'react-redux';
import SelectNumber from './SelectNumber';

const mapStateToProps = ({ numberOfPlayers }) => ({ numberOfPlayers });

export default connect(mapStateToProps)(SelectNumber);