import SessionForm from './session_form';
import {login, signupUser} from '../../actions/session';
import {connect} from 'react-redux';
import {withRouter} from 'react-router';

const mapDispatchToProps = (dispatch, ownProps) =>{
  let action  = (ownProps.match.params.signup) ? signupUser : login;
  return {
          action: (user)=>dispatch(action(user)),
        };
};

const mapSateToProps = (state, ownProps) => ({
  errors: state.session.errors,
  type: (ownProps.match.params.signup) ? "signup" : "login"
});

export default withRouter(connect(mapSateToProps, mapDispatchToProps)(SessionForm));
