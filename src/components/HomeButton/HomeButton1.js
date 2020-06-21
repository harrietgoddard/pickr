import { connect } from "react-redux";
import HomeButton from './HomeButton';
// import { reset } from '../../data/action';

const mapStateToProps = ({ home }) => ({ home });

// const mapDispatchToProps = dispatch => {
//     return {
//         handleClick: () => { 
//             dispatch(reset());
//         }
//     };
// };

export default connect(mapStateToProps)(HomeButton);