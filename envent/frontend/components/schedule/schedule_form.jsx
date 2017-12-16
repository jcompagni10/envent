import React from 'react';
import Dropzone from 'react-dropzone';
import request from 'superagent';

const CLOUDINARY_UPLOAD_PRESET = 'umzpk5ol';
const CLOUDINARY_UPLOAD_URL = 'https://api.cloudinary.com/v1_1/trwong/image/upload';

export default class Schedule extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      title: "",
      start_time: "",
      end_time: "",
      feature_id: "",
      location: "",
      img_url: "",
      description: "",
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    if (this.props.currentEvent.id === undefined) {
      this.props.fetchEvent(this.props.match.params.eventTag);
    }
  }

  componentWillReceiveProps(newProps) {
    if (newProps.currentEvent.id !== this.props.currentEvent.id) {
      this.setState({ event_id: newProps.currentEvent.id });
    }
  }

  handleChange(title) {
    return event => this.setState({ [title]: event.target.value});
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.createScheduleItem(this.props.currentEvent.id, this.state);

    ["schedule-title", "schedule-start-time",
      "schedule-end-time", "schedule-feature-id",
      "schedule-location", "schedule-description"]
      .forEach( id => {
        this.clearField(id);
      });

    this.setState({ img_url: "" });
  }

  clearField(id) {
    document.getElementById(id).value = "";
  }

  onImageDrop(files) {
    this.handleImageUpload(files[0]);
  }

  handleImageUpload(file) {
    let upload = request.post(CLOUDINARY_UPLOAD_URL)
      .field('upload_preset', CLOUDINARY_UPLOAD_PRESET)
      .field('file', file);

      upload.end((err, response) => {
        if (err) {
          console.error(err);
        }

      if (response.body.secure_url !== '') {
        this.setState({
          img_url: response.body.secure_url
        });
      }
    });
  }

  render() {
    return (
      <div>
        <h2> Schedule Form </h2>
        {/* <div id="calendar"></div> */}
        <form action="">
          <input
            id="schedule-title"
            onChange={ this.handleChange("title") }
            type="text"
            name="title"
            placeholder="Title"/>
          <input
            id="schedule-start-time"
            onChange={ this.handleChange("start_time") }
            type="datetime-local"
            name="start_time"
            placeholder="Start Time"/>
          <input
            id="schedule-end-time"
            onChange={ this.handleChange("end_time") }
            type="datetime-local"
            name="end_time"
            placeholder="End Time"/>
          <input
            id="schedule-feature-id"
            onChange={ this.handleChange("feature_id") }
            type="text"
            name="feature_id"
            placeholder="Feature(_id)"/>
          <input
            id="schedule-location"
            onChange={ this.handleChange("location") }
            type="text"
            name="location"
            placeholder="Location"/>
          <input
            id="schedule-description"
            onChange={ this.handleChange("description") }
            type="text"
            name="description"
            placeholder="Description"/>
          <Dropzone
            multiple={false}
            accept="image/*"
            onDrop={this.onImageDrop.bind(this)}>
            <p>Drop an image or click to select a file to upload.</p>
          </Dropzone>
          <img src={this.state.img_url} />
          <input
            onClick={this.handleSubmit}
            type="submit"/>
        </form>
      </div>
    );
  }
}
