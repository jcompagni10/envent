import React from 'react';
import Errors from '../misc/errors';
import Dropzone from 'react-dropzone';
import request from 'superagent';
import DatePicker from 'react-datepicker';
import moment from 'moment';
import {
  FormGroup,
  FormControl,
  Checkbox,
  Nav,
  NavItem,
  Navbar,
} from 'react-bootstrap';

const modules = ["Schedule", "News", "MessageBoard", "Map"];
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
      end_date: moment(),
      id: undefined,
    };

    this.modules = new Set;
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    let {
      name,
      tag,
      img_url,
      location,
      message,
      id,
      // start_date,
      // end_date,
    } = this.props.currentEvent;

    if (this.props.match.params.eventId) {
      this.setState({
        name,
        tag,
        img_url,
        location,
        message,
        id,
        // start_date,
        // end_date,
      });
    }
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

  handleSubmit( action = "create" ) {
    let event = Object.assign({},this.state);
    event["modules"] = Array.from(this.modules);
    event.start_date = this.state.start_date.format();
    event.end_date = this.state.end_date.format();
    if (action === "create") {
      this.props.createEvent(event);
      // this.props.history.push(`/event_builder/${event.tag}/${event.modules[0]}`);
      this.props.history.push(`/event/${event.tag}/${event.modules[0]}`);
    } else {
      this.props.updateEvent(event);
      this.props.history.push(`/event/${event.id}`);
    }
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

  checkPropsForModule(module) {
    if (this.props.currentEvent.display_elements.includes(module)) {
      return "checked";
    }
    return "";
  }

  render(){
    let {
      name,
      tag,
      img_url,
      location,
      message,
      start_date,
      end_date,
    } = this.state;

    // let title = this.props.match.params.eventId ? "Update Event" : "Event Form";
    // let navbar = this.props.match.params.eventId ? (
    //   <Nav bsStyle="tabs" activeHref={this.props.location.pathname}>
    //     <NavItem
    //       eventKey={1}
    //       href={`#/event/${this.props.currentEvent.id}`}
    //       >Event</NavItem>
    //     {
    //       this.props.currentEvent.display_elements.map( (el, i) => (
    //         <NavItem
    //           key={el}
    //           id={el}
    //           eventKey={i + 2}
    //           href="#"
    //         >{ el }</NavItem>
    //       ))
    //     }
    //   </Nav>
    // ) : (
    //   ""
    // );

    let title;
    let navbar;
    let button;
    if (this.props.match.params.eventId) {
      title = "Update Event";
      navbar = (
        <Nav bsStyle="tabs" activeHref={this.props.location.pathname}>
          <NavItem
            eventKey={1}
            href={`#/event/${this.props.currentEvent.id}`}
          >Event</NavItem>
          {
            this.props.currentEvent.display_elements.map((el, i) => (
              <NavItem
                key={el}
                id={el}
                eventKey={i + 2}
                href="#"
              >{el}</NavItem>
            ))
          }
        </Nav>
      );
      button = (
        <button
          className="btn btn-primary"
          onClick={ () => this.handleSubmit("update") }>
          Update Event
        </button>
      );
    } else {
      title = "Event Form";
      navbar = "";
      button = (
      <button
        className="btn btn-primary"
        onClick={ () => this.handleSubmit("create") }>
        Create Event
      </button>
      );
    }

    const checkPropsForModule = module => {
      if (this.props.currentEvent.display_elements.includes(module)) {
        return "checked";
      }
      return "";
    };

    return (
      <div className="event-form-main-container">
      {/* { navbar } */}
        <h2>{ title }</h2>
        <form>
          <FormGroup
            // controlId="formBasicText"
            >
            <Errors errors = {this.props.errors} />
            <fieldset>
              <label htmlFor ="event-name"> Name </label>
              <FormControl
                id= "event-name"
                type ="text"
                onChange ={(e)=>this.handleChange("name",e)}
                placeholder ="Event Name"
                value={name}
              />
            </fieldset>
            <fieldset>
              <label htmlFor ="event-tag">Tag</label>
              <FormControl
                id= "event-tag"
                type ="text"
                onChange ={(e)=>this.handleChange("tag",e)}
                placeholder ="Event Tag"
                value={tag}
              />
            </fieldset>
            <fieldset>
              <label htmlFor ="event-location">Location</label>
              <FormControl
                id= "event-location"
                type ="text"
                onChange ={(e)=>this.handleChange("location",e)}
                placeholder ="Event Location"
                value={location}
              />
            </fieldset>
            <fieldset>
              <label htmlFor ="event-message">Message</label>
              <FormControl
                id= "event-message"
                type ="text"
                onChange ={(e)=>this.handleChange("message",e)}
                placeholder ="A custom event message"
                value={message}
              />
            </fieldset>
            <fieldset>
              <div className="event-form-date-container">
                <div>
                  <label htmlFor ="event-start">Start Date</label>
                  <DatePicker
                    id = "event-start"
                    selected = {this.state.start_date}
                    onChange = {(e)=>this.handDateChange("start_date",e)}
                  />
                </div>
                <div>
                  <label htmlFor ="event-end">End Date</label>
                  <DatePicker
                    id ="event-end"
                    selected = {this.state.end_date}
                    onChange = {(e)=>this.handDateChange("end_date",e)}
                  />
                </div>
              </div>
            </fieldset>

            {/* <FormGroup>
              {modules.map(module => (
                <fieldset key={ module }>
                  <Checkbox
                    id={module}
                    inline>

                    { module }
                  </Checkbox>
                  {' '}
                </fieldset>
              ))
            }
            </FormGroup> */}
            <label htmlFor="event-modules">Modules</label>
            <FormGroup>
              {modules.map(module =>(
                <fieldset key = {module}>
                  <div className="form-check">
                    <label className="form-check-label">
                      <Checkbox
                        // { checkPropsForModule(module) }
                        key={module}
                        id="event-modules"
                        className="form-check-input"
                        type="checkbox"
                        value={module}
                        onChange ={ (e) => this.handleChange("modules", e)}
                        >
                        { module }
                      </Checkbox>
                    </label>
                  </div>
                </fieldset>
              ))}
            </FormGroup>

            <label>Event Image</label>
            <Dropzone
              multiple={false}
              accept="image/*"
              // style={{"width": "300px;"}}
              className="event-dropzone"
              onDrop={this.onImageDrop.bind(this)}>
              <p>Drop an image or click to select a file to upload.</p>
            </Dropzone>

            <label>Image Preview</label>
            <img
              className="event-form-image-preview"
              src={this.state.img_url} />
            <fieldset>
              { button }
            </fieldset>
          </FormGroup>
        </form>
      </div>
    );
  }
}
