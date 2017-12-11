import React from 'react';
import ProgressBar from './progress_bar';
import {Route, Switch} from 'react-router-dom';
import EventFormContainer from '../event/event_form_container';

export default class AppBuilder extends React.Component {

  render(){
    return (
      <div>
        <h2>Build Your App</h2>
        <ProgressBar data={[3,5]} />
        <Switch>
          <Route path="/event_builder" componet={EventFormContainer} />
        </Switch>
      </div>
    );
  }
}