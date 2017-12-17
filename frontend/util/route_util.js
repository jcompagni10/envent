import React from 'react';
import {connect} from 'react-redux';
import {withRouter, Route, Redirect} from 'react-router';

const Auth = ({component: Component, path, loggedIn}) => (
  <Route path= {path} render={(props) => (
      !loggedIn ? (<Component {...props} /> ):
      (<Redirect to ="/dashboard"/>)
    )} />
);

const Protected = ({component: Component, path, loggedIn}) => (
  <Route path= {path} render={(props) => (
      loggedIn ? (<Component {...props} /> ):
      (<Redirect to ="/" />)
    )} />
);

const mapStateToProps = state =>({
  loggedIn: Boolean(state.session.currentUser)
});

export const AuthRoute = withRouter(connect(mapStateToProps)(Auth));
export const ProtectedRoute = withRouter(connect(mapStateToProps)(Protected));
