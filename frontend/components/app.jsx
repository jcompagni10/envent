import React from 'react';
import {Route, Switch} from 'react-router-dom';
import {AuthRoute, ProtectedRoute} from '../util/route_util.js';
import LandingPage from './landing_page.jsx';
import HeaderContainer from './header/header_container';
import AppBuilderContainer from './builder/app_builder_container';
import Dashboard from './dashboard/dashboard';
import EventContainer from './event/event_container';
import Schedule from './schedule/schedule';
import Map from './map/map_container';
import HomeLandingPage from './home/landing_page';

export default ()=>(
  <div>
    <ProtectedRoute path="/" component = {HeaderContainer} />
    <Switch>
      <ProtectedRoute path='/dashboard' component = {Dashboard} />
      <ProtectedRoute path='/event/' component = {EventContainer} />
      {/* <ProtectedRoute path='/event' component = {Event} /> */}
      {/* <ProtectedRoute path='/event/:eventTag/schedule' component = {Schedule} /> */}

      <ProtectedRoute path='/event_builder' component = {AppBuilderContainer} />
      <ProtectedRoute path='/event/:eventTag/map/1' component={Map} />
      <AuthRoute exact path="/" component = {HomeLandingPage} />
      <AuthRoute exact path="/signup" component = {LandingPage} />
      {/* <AuthRoute exact path="/:signup?" component = {LandingPage} /> */}
    </Switch>
  </div>
);
