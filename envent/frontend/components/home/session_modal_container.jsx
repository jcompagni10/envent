import SessionModal from './session_modal';
import { login, signupUser } from '../../actions/session';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';

const mapDispatchToProps = (dispatch, ownProps) => ({
  login: user => dispatch(login(user)),
  signupUser: user => dispatch(signupUser(user)),
});

const mapStateToProps = (state, ownProps) => ({
  errors: state.session.errors,
  type: (ownProps.match.params.signup) ? "signup" : "login"
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(SessionModal));
