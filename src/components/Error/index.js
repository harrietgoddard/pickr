import { connect } from "react-redux";
import Error from './Error';

const mapStateToProps = ({ tooManyPlayers }) => ({ tooManyPlayers });

export default connect(mapStateToProps)(Error);