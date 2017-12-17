import React from 'react';
import {Link} from 'react-router-dom';
import EventIndexContainer from './../event/event_index_container';
import StatsContainer from './../stats/stats_container';

export default()=>{
  return (
      <div className="dashboard-container">
        <div className="dashboard-header-container">
          <div className="dashboard-header">
            Dashboard
          </div>
        </div>

      <StatsContainer />

        <div className="dashboard-content">
          <EventIndexContainer />
        </div>
      </div>
  );
};
