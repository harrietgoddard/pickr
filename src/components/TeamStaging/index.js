import { connect } from "react-redux";
import TeamStaging from './TeamStaging';

const mapStateToProps = ({ teamsGenerated }) => ({ teamsGenerated });

export default connect(mapStateToProps)(TeamStaging);