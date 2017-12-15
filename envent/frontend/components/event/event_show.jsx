import React from 'react';
import { Link, Switch } from 'react-router-dom';
import EventFormContainer from '../event/event_form_container';
import ScheduleContainer from './../schedule/schedule_container';
import { ProtectedRoute } from './../../util/route_util';




export default class EventShow extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchEvent(parseInt(this.props.match.params.eventId));
  }

  componentWillReceiveProps(newProps) {
    if (this.props.match.params.eventId !== newProps.match.params.eventId) {
      this.props.fetchEvent(parseInt(newProps.match.params.eventId));
    }
  }

  render() {
    let { id, display_elements } = this.props.currentEvent;
    
    if (id === undefined) {
      return null;
    }

    let links = display_elements.map(el => (
      <Link to={`/event/${id}/${el}`}>{ el }</Link>
    ));

    return (
      <div>
        <h3>Event Show</h3>
        { links }

        <Switch>
          <ProtectedRoute path="/event/:eventId/schedule" component={ScheduleContainer} />
          <ProtectedRoute path="/event/:eventId" component={EventFormContainer} />
        </Switch>
      </div>
    );
  }
}
