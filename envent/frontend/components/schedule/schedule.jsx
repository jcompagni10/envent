import React from 'react';
import ScheduleFormContainer from '././schedule_form_container';

export default class Schedule extends React.Component{
  constructor(props){
    super(props);
  }

  render(){
    return (
      <div>
        {/* <div id="calendar"></div> */}
        <ScheduleFormContainer />
      </div>
    );
  }
}
