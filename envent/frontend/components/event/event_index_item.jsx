import React from 'react';
import { Link } from 'react-router-dom';

export default class EventIndexItem extends React.Component {
  constructor(props) {
    super(props);
  }


  render() {
    if (this.props.events.by_id === {}) {
      return null;
    }
    
    let {
      name, tag, img_url
    } = this.props.events.by_id[this.props.eventId];

    return (
      <div>
        Name: <Link to={`/event/${this.props.eventId}`}>
          {name}
        </Link>
        <br />
        Tag: {tag}
        <br />
        Image:
        <img
          className="event-index-picture"
          src={img_url}
          alt=""/>
      </div>
    );
  }
}
