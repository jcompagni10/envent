import React from 'react';
import { Link } from 'react-router-dom';
import {Glyphicon} from 'react-bootstrap';

export default class EventIndexItem extends React.Component {
  constructor(props) {
    super(props);
  }


  render() {
    if (this.props.events.by_id === {}) {
      return null;
    }

    let {
      name, tag, img_url, last_edit
    } = this.props.events.by_id[this.props.eventId];

    return (
      <div className="event-index-item-container">
        <div className ="event-data-left">
          <img
            className="event-index-picture"
            src={img_url}
            alt=""/>
          <div className="event-index-item-text-container">
            <Link
              className ="event-title"
              to={`/event/${this.props.eventId}`}>
              {name}
            </Link>
            <div className ="event-tag">
              Tag: {tag}
            </div>
          </div>
        </div>
        <div className ="event-data-center">
          <div className ="event-last-modified">
            Last edited {last_edit}
          </div>
        </div>
        <div className ="event-data-right">
          <div className ="event-edit-icon">
            <Link
              to={`/event/${this.props.eventId}`}>
              <Glyphicon
                className = "edit-cog"
                glyph = "cog" /> Edit
            </Link>
          </div>
        </div>
      </div>
    );
  }
}
