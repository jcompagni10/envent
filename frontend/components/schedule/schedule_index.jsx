import React from 'react';
import ScheduleIndexItemContainer from '././schedule_index_item_container';

export default class ScheduleIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchScheduleItems(this.props.currentEvent.id);
  }

  componentWillReceiveProps(newProps) {
    if (newProps.currentEvent.id !== this.props.currentEvent.id) {
      this.props.fetchScheduleItems(newProps.currentEvent.id);
    }
  }

  render() {
    let { currentEvent } = this.props;
    if (currentEvent === undefined ||
      currentEvent.scheduleItemsArray === undefined) {
      return null;
    }

    let { scheduleItemsArray } = currentEvent;

    let display = scheduleItemsArray.length === 0 ? (
      <div>No Schedule Items</div>
    ) : (
      scheduleItemsArray.map( id => (
        <ScheduleIndexItemContainer
        key={id}
        scheduleItemId={id}
        />
      ))
    );

    return (
      <div>
        <h3>Current Schedule Items</h3>
        {/* <div className="schedule-index-container"> */}
          { display }
        {/* </div> */}
      </div>
    );
  }
}
