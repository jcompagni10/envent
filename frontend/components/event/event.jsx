import React from 'react';
import EventIndexContainer from './../event/event_index_container';
import { Route, Switch } from 'react-router-dom';
import EventShowContainer from './../event/event_show_container';
import { ProtectedRoute } from './../../util/route_util';

export default class Event extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchEvents(this.props.currentUser);
  }

  render() {
    

    return (
      <div>
        <Switch>
          <ProtectedRoute path='/event/:eventId' component={EventShowContainer} />
          <div className="event-index-container">
            <ProtectedRoute path='/event/' component={EventIndexContainer} />
          </div>
        </Switch>
      </div>
    );
  }
}
