import React from 'react';
import ProgressBarContainer from './progress_bar_container';
import {Route, Switch} from 'react-router-dom';
import EventFormContainer from '../event/event_form_container';
import ScheduleContainer from './../schedule/schedule_container';
import { ProtectedRoute } from './../../util/route_util';
import NewsContainer from './../news/news_container';
import InfoFormContainer from './../info/info_form_container';

export default class AppBuilder extends React.Component {

  render(){
    return (
      <div>
        <h2>Build Your App</h2>
        <ProgressBarContainer data={[3,5]} />
        <Switch>
          <ProtectedRoute path='/event_builder/:eventTag/info' component={InfoFormContainer} />
          <ProtectedRoute path='/event_builder/:eventTag/schedule' component={ScheduleContainer} />
          <ProtectedRoute path='/event_builder/:eventTag/news' component={NewsContainer} />
          <ProtectedRoute path="/event_builder" component={EventFormContainer} />
        </Switch>
      </div>
    );
  }
}
