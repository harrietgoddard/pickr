import { connect } from "react-redux";
import TeamStagingArea from './TeamStagingArea';

const mapStateToProps = ({ teamsGenerated }) => ({ teamsGenerated });

export default connect(mapStateToProps)(TeamStagingArea);