import React from 'react';
import ScheduleIndexItemContainer from '././schedule_index_item_container';

export default class ScheduleIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchScheduleItems();
  }

  render() {
    // debugger;
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
