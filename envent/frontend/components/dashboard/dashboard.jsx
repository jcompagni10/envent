import React from 'react';
import {Link} from 'react-router-dom';
import EventIndexContainer from './../event/event_index_container';
import {Glyphicon} from 'react-bootstrap';
import StatsContainer from './../stats/stats_container';

const dataItems = [
  {label: "All Events", icon: "home"},
  {label: "Current Events", icon: "home"},
  {label: "Total Views", icon: "home"},
  {label: "Avg. Views", icon: "home"},
];
export default()=>{
  return (
      <div className="dashboard-container">

        // datas
        // total events, upcoming events, current_events
        <div className="dashboard-header-container">
          <div className="dashboard-header">
            Dashboard
          </div>
          <div className = "dashboard-data-container">
            {dataItems.map(item=>(
              <div className="dashboard-data-item">
                <div className="icon">
                  <Glyphicon glyph = {item.icon}/>
                </div>
              </div>
            ))}
          </div>
        </div>

      <StatsContainer />

        <div className="dashboard-content">
          <EventIndexContainer />
        </div>
      </div>
  );
};
