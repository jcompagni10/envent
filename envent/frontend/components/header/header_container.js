import {connect} from 'react-redux';
import Header from './Header';
import {logout} from '../../actions/session.js';
import {withRouter} from 'react-router-dom';

const mapStateToProps = state => (
  {currentUser: state.session.currentUser}
);
const mapDispatchToProps = dispatch => ({
  logout: ()=>dispatch(logout())
});

export default connect(mapStateToProps,mapDispatchToProps)(Header);
