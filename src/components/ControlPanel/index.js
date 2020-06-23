import { connect } from "react-redux";
import ControlPanel from './ControlPanel';

const mapStateToProps = ({ tooManyPlayers, playerInputComplete, teamsGenerated }) => ({ tooManyPlayers, playerInputComplete, teamsGenerated });

export default connect(mapStateToProps)(ControlPanel);