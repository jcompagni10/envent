import React from 'react';
import {Route, Switch} from 'react-router-dom';
import {AuthRoute, ProtectedRoute} from '../util/route_util.js';
import LandingPage from './landing_page.jsx';
import HeaderContainer from './header/header_container';
import EventFormContainer from './event/event_form_container';
import Dashboard from './dashboard/dashboard';
import Event from './event/event';

export default ()=>(
  <div>
    <ProtectedRoute path="/" component = {HeaderContainer} />
  <Switch>
    <ProtectedRoute path='/dashboard' component = {Dashboard} />
    <ProtectedRoute path='/event/new' component = {EventFormContainer} />
    <ProtectedRoute path='/event/' component = {Event} />
    <ProtectedRoute path='/event' component = {Event} />
    <AuthRoute exact path="/:signup?" component = {LandingPage} />
  </Switch>
</div>
);
