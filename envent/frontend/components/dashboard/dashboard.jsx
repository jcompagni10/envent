import React from 'react';
import {Link} from 'react-router-dom';

export default()=>{
  return (
    <div>
      <h1> DASHBOARD</h1>
      <Link to="/event/new">
        Create An Event
      </Link>
    </div>

  );
};
