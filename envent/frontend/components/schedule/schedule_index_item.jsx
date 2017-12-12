import React from 'react';

export default class ScheduleIndexItem extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let { by_id } = this.props.scheduleItems;
    // debugger;
    let scheduleItem = by_id[this.props.scheduleItemId];
    let {
      title,
      start_time,
      end_time,
      feature_id,
      location,
      img_url,
      description,
    } = scheduleItem;

    return (
      <div>
        {/* <div id="calendar"></div> */}
        title: { title }
        start_time: { start_time }
        end_time: { end_time }
        feature_id: { feature_id }
        location: { location }
        img_url: { img_url }
        description: { description }
        <button>Update</button>
        <button
          onClick={ () => this.props.destroyScheduleItem(this.props.scheduleItemId) }
          >Delete</button>
      </div>
    );
  }
}
