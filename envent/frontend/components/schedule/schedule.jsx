import React from 'react';
import ScheduleFormContainer from '././schedule_form_container';
import ScheduleIndexContainer from '././schedule_index_container';

export default class Schedule extends React.Component{
  constructor(props){
    super(props);
  }

  render(){
    return (
      <div>
        <ScheduleFormContainer />
        <ScheduleIndexContainer />
      </div>
    );
  }
}
