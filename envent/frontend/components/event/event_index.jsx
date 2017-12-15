import React from 'react';
import EventIndexItemContainer from './event_index_item_container';

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
    
    if (events === {}) {
      return null;
    }
    
    display = events.all_ids.map( eventId => (
      <EventIndexItemContainer
        key={eventId}
        eventId={eventId} />
    ));

    return (
      <div>
        <h5>Your Events</h5>
        { display }
      </div>
    );
  }
}
