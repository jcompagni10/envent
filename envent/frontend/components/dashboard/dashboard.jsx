import React from 'react';
import {Link} from 'react-router-dom';
import EventIndexContainer from './../event/event_index_container';

export default()=>{
  return (
    <div className="dashboard-bottom-margin">
      <div className="dashboard-container">
        <div className="dashboard-header-container">
          <h1 className="dashboard-header">DASHBOARD</h1>
        </div>
        <div className="dashboard-content">
          <div className="dashboard-left">
            <h3>Create a New Event</h3>
            <div className="dashboard-left-button-container">
              <Link
                className="dashboard-create-event-link"
                to="/event_builder">
                Create An Event
              </Link>
            </div>
          </div>

          <div className="dashboard-mid">
            <h3>OR</h3>
          </div>

          <div className="dashboard-right">
            <h3>Manage Your Events</h3>
            <div className="dashboard-right-container">
              <EventIndexContainer />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
