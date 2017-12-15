import React from 'react';
import {Link} from 'react-router-dom';
import EventIndexContainer from './../event/event_index_container';

export default()=>{
  return (
    <div>
      <h1> DASHBOARD</h1>
      <Link to="/event_builder">
        Create An Event
      </Link>
      <EventIndexContainer />
    </div>
  );
};
