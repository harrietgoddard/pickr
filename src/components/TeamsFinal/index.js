import { connect } from "react-redux";
import TeamsFinal from './TeamsFinal';

const mapStateToProps = ({ color1, color2, home }) => ({ color1, color2, home });

export default connect(mapStateToProps)(TeamsFinal);