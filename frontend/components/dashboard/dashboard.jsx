import React from 'react';
import {Link} from 'react-router-dom';
import EventIndexContainer from './../event/event_index_container';
import StatsContainer from './../stats/stats_container';
import { Glyphicon } from 'react-bootstrap';

export default()=>{
  return (
      <div className="dashboard-container">

      <StatsContainer />

        <div className="dashboard-content">
        <div className="dashboard-create-event-link-container">
          <Link
            className="dashboard-create-event-link"
            to="/event_builder">
            <Glyphicon
              className="plus-sign"
              glyph="plus" />
            Create An Event
          </Link>
        </div>
        <div className="event-or">
          Or
        </div>
          <EventIndexContainer />
        </div>
      </div>
  );
};
