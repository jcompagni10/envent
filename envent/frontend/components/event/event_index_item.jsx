import React from 'react';

export default class EventIndexItem extends React.Component {
  constructor(props) {
    super(props);
  }


  render() {
    if (this.props.events.by_id === {}) {
      return null;
    }
    
    let {
      name, tag,
    } = this.props.events.by_id[this.props.eventId];


    return (
      <div>
        Name: {name}
        <br />
        Tag: {tag}
        <br />
      </div>
    );
  }
}
