import { connect } from "react-redux";
import TeamConfirmed from './TeamConfirmed';

const mapStateToProps = ({ color1, color2, home }) => ({ color1, color2, home });

export default connect(mapStateToProps)(TeamConfirmed);