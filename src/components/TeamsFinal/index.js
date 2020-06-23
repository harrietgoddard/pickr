import { connect } from "react-redux";
import TeamsFinal from './TeamsFinal';

const mapStateToProps = ({ color1, color2 }) => ({ color1, color2 });

export default connect(mapStateToProps)(TeamsFinal);