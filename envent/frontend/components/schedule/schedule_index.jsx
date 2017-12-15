import React from 'react';
import ScheduleIndexItemContainer from '././schedule_index_item_container';

export default class ScheduleIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  // componentDidMount() {
  //   this.props.fetchScheduleItems(this.props.currentEvent.id);
  // }

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
    let display = this.props.currentEvent.scheduleItemsArray.map( id => (
      <ScheduleIndexItemContainer
      key={id}
      scheduleItemId={id}
      />
    ));

    return (
      <div>
        <h5>Current Schedule Items</h5>
        { display }
      </div>
    );
  }
}
