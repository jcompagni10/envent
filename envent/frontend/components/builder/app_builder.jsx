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
    // debugger;
    // let data, first, last;
    // let {
    //   currentEvent,
    //   location,
    //   match,
    // } = this.props;
    // let { display_elements } = currentEvent;

    // if (currentEvent.id === undefined) {
    //   return null;
    // }

    // if (location.pathname === "/event_builder") {
    //   data = [1, 6];
    // } else {
    //   first = display_elements.indexOf(match.params.split("/".pop())) + 1;
    //   last = display_elements.length;
    //   data = [ first, last ];
    // }

    return (
      <div>
        <h2 className="app-builder-title">Build Your App</h2>
        <ProgressBarContainer data={ [1,6] } />
        {/* <ProgressBarContainer data={ data } /> */}
        <div className="app-builder-content-container">
          <Switch>
            {/* <ProtectedRoute path='/event_builder/:eventTag/info' component={InfoFormContainer} /> */}
            <ProtectedRoute path='/event_builder/:eventTag/schedule' component={ScheduleContainer} />
            <ProtectedRoute path='/event_builder/:eventTag/news' component={NewsContainer} />
            <ProtectedRoute path="/event_builder" component={EventFormContainer} />
          </Switch>
        </div>
      </div>
    );
  }
}
