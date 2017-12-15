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
    if (this.props.currentEvent.id === undefined) {
      this.props.fetchEvent(this.props.match.params.eventTag);
    }
    this.props.fetchInfo(this.props.currentEvent.id);
  }

  handleChange(name) {
    return event => this.setState({ [name]: event.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.createInfo(
      this.props.currentEvent.id,
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
          <label>Start Date:
            <input
              onChange={this.handleChange("start_date")}
              type="date"
              name="start_date"
              id=""/>
          </label>
          <br />

          <label>End Date:
            <input
              onChange={this.handleChange("end_date")}
              type="date"
              name="end_date"
              id=""/>
          </label>
          <br />

          <label>Location:
            <input
              onChange={this.handleChange("location")}
              type="text"
              name="location"
              id=""/>
          </label>
          <br />

          <label>Admin Message:
            <br />
            <textarea
              onChange={this.handleChange("message")}
              name="message"
              id=""
              cols="30"
              rows="10">
            </textarea>
          </label>
          <br />

          <input
            type="submit"
            value="Save"
            onClick={this.handleSubmit}/>
        </form>
      </div>
    );
  }
}
