import React from 'react';
import Errors from '../misc/errors';
import Dropzone from 'react-dropzone';
import request from 'superagent';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import moment from 'moment';

const modules = ["schedule", "news", "info", "message board", "map"];
const CLOUDINARY_UPLOAD_PRESET = 'umzpk5ol';
const CLOUDINARY_UPLOAD_URL = 'https://api.cloudinary.com/v1_1/trwong/image/upload';


export default class EventForm extends React.Component{
  constructor(){
    super();
    this.state = {
      name: "",
      tag: "",
      img_url: "",
      location: '',
      message: '',
      start_date: moment(),
      end_date: moment()
    };

    this.modules = new Set;
  }


  handleChange(field, e){
    if (field === 'modules'){
      let value = e.target.value;
      if (e.target.checked){
        this.modules.add(value);
      } else {
        this.modules.delete(value);
      }
    }
    this.setState({[field]: e.target.value});
  }

  handDateChange(field, date){
    this.setState({[field]: date});
  }

  handleSubmit(){
    let event = Object.assign({},this.state);
    event["modules"] = Array.from(this.modules);
    event.start_date = this.state.start_date.format();
    event.end_date = this.state.end_date.format();
    this.props.createEvent(event);
    // this.props.history.push(`/event_builder/${event.tag}/${this.modules[0]}`);

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

  render(){
    return (
      <div>
        <h2> Event Form</h2>
        <form>
          <Errors errors = {this.props.errors} />
          <fieldset>
            <label htmlFor ="event-name"> Name </label>
            <input
              id= "event-name"
              type ="text"
              onChange ={(e)=>this.handleChange("name",e)}
              placeholder ="Event Name"
            />
          </fieldset>
          <fieldset>
            <label htmlFor ="event-tag">Tag</label>
            <input
              id= "event-tag"
              type ="text"
              onChange ={(e)=>this.handleChange("tag",e)}
              placeholder ="Event Tag"
            />
          </fieldset>
          <fieldset>
            <label htmlFor ="event-location">Location</label>
            <input
              id= "event-location"
              type ="text"
              onChange ={(e)=>this.handleChange("location",e)}
              placeholder ="Event Location"
            />
          </fieldset>
          <fieldset>
            <label htmlFor ="event-message">Message</label>
            <input
              id= "event-message"
              type ="text"
              onChange ={(e)=>this.handleChange("message",e)}
              placeholder ="A custom event message"
            />
          </fieldset>
          <fieldset>
            <label htmlFor ="event-start">start date</label>
            <DatePicker
              id = "event-start"
              selected = {this.state.start_date}
              onChange = {(e)=>this.handDateChange("start_date",e)}
            />
          <label htmlFor ="event-end">end date</label>
            <DatePicker
              id ="event-end"
              selected = {this.state.end_date}
              onChange = {(e)=>this.handDateChange("end_date",e)}
            />
          </fieldset>
          {modules.map(module =>(
            <fieldset key = {module}>
              <div className="form-check">
                <label className="form-check-label">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    value={module}
                    onChange ={(e)=>this.handleChange("modules",e)}
                    />
                  {module}
                </label>
              </div>
            </fieldset>
          ))}

          <Dropzone
            multiple={false}
            accept="image/*"
            onDrop={this.onImageDrop.bind(this)}>
            <p>Drop an image or click to select a file to upload.</p>
          </Dropzone>

          <img src={this.state.img_url} />
          <fieldset>
            <button
              className= "btn btn-primary"
              onClick = {this.handleSubmit.bind(this)}>
              Create Event
            </button>
          </fieldset>
        </form>
      </div>
    );
  }
}
