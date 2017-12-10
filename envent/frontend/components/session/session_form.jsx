import React from 'react';
import {Link} from 'react-router-dom';
import Errors from '../misc/errors';

export default class SessionForm extends React.Component {
  constructor() {
    super();
    this.state = {
      email: '',
      password: ''
    };
  }
  title(){
    return (this.props.type === "login") ? "Log In" : "Sign Up";
  }

  linkToOtherForm(){
    let url =  (this.props.type === "login") ? "signup" : "";
    let text =  (this.props.type === "login") ? "Sign Up" : "Login";
    return (
      <Link to ={url}>{text}</Link>
    );
  }

  handleSubmit(){
    this.props.action(this.state);
  }

  handleChange(feild, e){
    this.setState({[feild]: e.target.value});
  }

  render(){
    return (
      <div>
        <h3>{this.title()}</h3>
        <form>
          <SessionErrors errors = {this.props.errors} />
          <fieldset>
            <label htmlFor="email">Email:</label>
            <input
              id= "email"
              type="text"
              value ={this.state.email}
              placeholder = "email"
              onChange = {(e) => this.handleChange("email", e)}
              />
          </fieldset>
          <fieldset>
            <label htmlFor="passowrd">Password:</label>
            <input
              id="password"
              type="password"
              value ={this.state.password}
              placeholder = "password"
              onChange = {(e) => this.handleChange("password", e)}
              />
          </fieldset>
        <button
          onClick ={this.handleSubmit.bind(this)}
          className ="btn btn-primary"
          >
          {this.title()}
        </button>
        </form>
        {this.linkToOtherForm()}
      </div>
    );
  }


}
