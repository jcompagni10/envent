import React from 'react';
import moment from 'moment';

export default class ScheduleIndexItem extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let id_arr = this.props.currentEvent.scheduleItems;
    let scheduleItem = id_arr[this.props.scheduleItemId];
    let {
      title,
      start_time,
      end_time,
      feature_id,
      location,
      img_url,
      description,
      parsed_start,
      parsed_end
    } = scheduleItem;

    // let displayStart = moment(start_time)
    // let displayEnd = moment(start_time).format("MMM DD h:mma");

    // let start = new Date(start_time);
    // let end = new Date(end_time);

    // let displayStart = `${start.getMonth()} ${start.getDate()} at ${start.getHours()}:${start.getMinutes()}`;
    // let displayEnd = `${end.getMonth()} ${end.getDate()} at ${end.getHours()}:${end.getMinutes()}`;


    return (
      <div className="schedule-index-item-container">
        {/* <div id="calendar"></div> */}
        <div>
          <img
            className="schedule-index-item-image"
            src={ img_url } alt=""/>
        </div>

        <div className="schedule-index-item-container-right">
          <label htmlFor="">Title </label> &nbsp;
          { title }
          <br/>

          <label htmlFor="">Start Time </label> &nbsp;
          { parsed_start }
          <br />

          <label htmlFor="">End Time </label> &nbsp;
          { parsed_end }
          <br />

          <label htmlFor="">Feature </label> &nbsp;
          { feature_id }
          <br />

          <label htmlFor="">Location </label> &nbsp;
          { location }
          <br />

          <label htmlFor="">Description </label> &nbsp;
          { description }
          <br />

          {/* <button>Update</button>
          <button
            onClick={ () => this.props.destroyScheduleItem(this.props.scheduleItemId) }
            >Delete</button> */}
        </div>
      </div>
    );
  }
}
