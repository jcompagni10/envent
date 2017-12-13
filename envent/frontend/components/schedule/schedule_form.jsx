import React from 'react';

export default class Schedule extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      title: "",
      start_time: "",
      end_time: "",
      feature_id: "",
      location: "",
      image: undefined,
      description: "",
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  // componentWillReceiveProps(newProps) {
    // if (newProps.currentEvent.id !== this.props.currentEvent.id) {
    //   this.setState({ event_id: newProps.currentEvent.id });
    // }
  // }

  handleChange(title) {
    return event => this.setState({ [title]: event.target.value});
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.createScheduleItem(this.props.currentEvent.id, this.state);
  }

  render() {
    return (
      <div>
        <h2> Schedule Form </h2>
        {/* <div id="calendar"></div> */}
        <form action="">
          <input
            onChange={ this.handleChange("title") }
            type="text"
            name="title"
            placeholder="Title"/>
          <input
            onChange={ this.handleChange("start_time") }
            type="datetime-local"
            name="start_time"
            placeholder="Start Time"/>
          <input
            onChange={ this.handleChange("end_time") }
            type="datetime-local"
            name="end_time"
            placeholder="End Time"/>
          <input
            onChange={ this.handleChange("feature_id") }
            type="text"
            name="feature_id"
            placeholder="Feature(_id)"/>
          <input
            onChange={ this.handleChange("location") }
            type="text"
            name="location"
            placeholder="Location"/>
          <input
            onChange={ this.handleChange("image") }
            type="file"
            name="image"
            placeholder="Image"/>
          <input
            onChange={ this.handleChange("description") }
            type="text"
            name="description"
            placeholder="Description"/>
          <input
            onClick={this.handleSubmit}
            type="submit"/>
        </form>
      </div>
    );
  }
}
