import {connect} from 'react-redux';
import Header from './Header';
import {logout} from '../../actions/session.js';
import {withRouter} from 'react-router-dom';
import EventForm from './event_form';

const mapStateToProps = state => (
  {currentUser: state.session.currentUser}
);
const mapDispatchToProps = dispatch => ({
  logout: ()=>dispatch(logout())
});

export default connect(mapStateToProps,mapDispatchToProps)(EventForm);
