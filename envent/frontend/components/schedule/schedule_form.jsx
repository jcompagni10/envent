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
