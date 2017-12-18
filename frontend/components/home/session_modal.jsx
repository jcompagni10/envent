import React from 'react';
import { Modal, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Errors from '../misc/errors';


export default class SessionModal extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: "",
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSignUp = this.handleSignUp.bind(this);
    this.handleLogIn = this.handleLogIn.bind(this);
  }

  title() {
    return (this.props.type === "login") ? "Log In" : "Sign Up";
  }

  linkToOtherForm() {
    let url = (this.props.type === "login") ? "signup" : "";
    let text = (this.props.type === "login") ? "Sign Up" : "Login";
    return (
      <Link to={url}>{text}</Link>
    );
  }

  handleSignUp() {
    this.props.signupUser(this.state);
  }

  handleLogIn() {
    this.props.login(this.state);
  }

  handleChange(field, e) {
    this.setState({ [field]: e.target.value });
  }


  render() {
    let title;
    let button;
    // if (this.props.modal)
    title = this.props.modalAction === "signup" ? "Sign Up" : "Log In";
    button = this.props.modalAction === "signup" ? (
      <Button
        type="submit"
        form="session-form"
        onClick={ this.handleSignUp }
        bsStyle="primary"
      >Sign Up</Button>
    ) : (
      <Button
        type="submit"
        form="session-form"
        onClick={ this.handleLogIn }
        bsStyle="primary"
      >Log In</Button>
    );

    return (
      <div className="static-modal">
        <Modal show={ this.props.modalOpen } onHide={this.props.closeModal}>
          <Modal.Header closeButton>
            <Modal.Title>{title}</Modal.Title>
          </Modal.Header>

          <Modal.Body>
            <form id="session-form">
              <Errors errors={this.props.errors} />
              <fieldset>
                {/* <label htmlFor="email"></label> */}
                <input
                  id="email"
                  type="text"
                  value={this.state.email}
                  placeholder="Email"
                  onChange={(e) => this.handleChange("email", e)}
                />
              </fieldset>
              <fieldset>
                {/* <label htmlFor="password"></label> */}
                <input
                  id="password"
                  type="password"
                  value={this.state.password}
                  placeholder="Password"
                  onChange={(e) => this.handleChange("password", e)}
                />
              </fieldset>
            </form>
          </Modal.Body>

          <Modal.Footer>

            {/* <button
          onClick ={ this.handleSubmit}
          className ="btn btn-primary"
          >
          {this.title()}
        </button> */}

            
            
            <Button onClick={ this.props.closeModal }>Close</Button>
            { button }
          </Modal.Footer>
        </Modal>
      </div>
    );
  }
}