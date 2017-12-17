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
      <div className="schedule-index-item-container-daddy">
        {/* <div id="calendar"></div> */}
        <div className="schedule-index-item-title">
          {title}
        </div>

        <div className="schedule-index-item-container">
          <div>
            <img
              className="schedule-index-item-image"
              src={ img_url } alt=""/>
          </div>

          <div className="schedule-index-item-container-right">
            {/* <div>
              <label htmlFor="">Title </label>&nbsp;
            </div> */}

            <div>
              <label htmlFor="">Start Time </label>&nbsp;{ parsed_start }
            </div>

            <div>
              <label htmlFor="">End Time </label>&nbsp;{ parsed_end }
            </div>

            <div>
              <label htmlFor="">Feature </label>&nbsp;{ feature_id }
            </div>

            <div>
              <label htmlFor="">Location </label>&nbsp;{ location }
            </div>

            <div>
              <label htmlFor="">Description </label>&nbsp;{ description }
            </div>

            {/* <button>Update</button>
            <button
              onClick={ () => this.props.destroyScheduleItem(this.props.scheduleItemId) }
              >Delete</button> */}
          </div>
        </div>
      </div>
    );
  }
}
