import React from 'react';
import EventIndexItemContainer from './event_index_item_container';
import {Link} from 'react-router-dom';
import {Glyphicon} from 'react-bootstrap';

export default class EventIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchEvents(this.props.currentUser.id);
  }

  render() {
    let { events } = this.props;
    let display;

    if (events.all_ids.length === 0) {
      return null;
    }
    display = events.all_ids.map( eventId => (
      <EventIndexItemContainer
        key={eventId}
        eventId={eventId} />
    ));

    return (
      <div className='event-index-container'>
        <div className="event-index-item-container">
          <Link
            className="dashboard-create-event-link"
            to="/event_builder">
            <Glyphicon
              className = "plus-sign"
              glyph = "plus" />
            Create An Event
          </Link>
        </div>
        <div className ="event-or">
          Or
        </div>
        { display }
      </div>
    );
  }
}
