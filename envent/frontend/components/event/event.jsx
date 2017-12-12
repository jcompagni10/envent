import React from 'react';

export default class Event extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchEvents();
  }

  render() {
    

    return (
      <div>
        Event
      </div>
    );
  }
}
