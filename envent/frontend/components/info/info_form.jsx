import React from 'react';

export default class InfoForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      start_date: "",
      end_date: "",
      location: "",
      message: "",
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    this.props.fetchInfo(this.props.currentEvent.id);
  }

  handleChange(name) {
    return event => this.setState({ [name]: event.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.createInfo(
      this.props.currentEventId,
      this.state
    );
  }

  render() {
    let { info } = this.props.currentEvent;
    if (info === {}) {
      return null;
    }

    return (
      <div>
        Info
        <form action="">
          <input
            onChange={this.handleChange("start_date")}
            type="date"
            name="start_date"
            id=""/>
          <input
            onChange={this.handleChange("end_date")}
            type="date"
            name="end_date"
            id=""/>
          <input
            onChange={this.handleChange("location")}
            type="text"
            name="location"
            id=""/>
          <textarea
            onChange={this.handleChange("message")}
            name="message"
            id=""
            cols="30"
            rows="10">
          </textarea>
          <input
            type="submit"
            onClick={this.handleSubmit}/>
        </form>
      </div>
    );
  }
}
