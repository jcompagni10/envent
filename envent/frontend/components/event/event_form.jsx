import React from 'react';
import Errors from '../misc/errors';

const modules = ["schedule", "info", "announcements"];

export default class EventForm extends React.Component{
  constructor(){
    super();
    this.state = {
      name: "",
      tag: "",
    };
    this.modules = new Set;
  }

  handleSubmit(){
    this.props.action(this.state);
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

  handleSubmit(){
    let event = this.state;
    event["modules"] = Array.from(this.modules);
    this.props.createEvent(event);
    this.props.history.push(`/event_builder/${event.tag}/schedule`);
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
