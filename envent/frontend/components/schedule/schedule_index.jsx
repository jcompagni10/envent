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
    if (!this.props.scheduleItems) {
      return null;
    }

    let display = this.props.scheduleItems.all_ids.map( id => (
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
