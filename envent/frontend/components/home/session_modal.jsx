import React from 'react';
import { Modal, Button } from 'react-bootstrap';
import LandingPage from './../landing_page';
import SessionFormContainer from './../session/session_form_container';

export default class SessionModal extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: "",
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleUpdate = this.handleUpdate.bind(this);
  }


  handleSubmit(email, password) {
    this.props.action({ email: email, password: password });
  }

  handleUpdate(field, e) {
    e.preventDefault();
    // debugger;
    this.setState({ [field]: e.target.value });
  }

  render() {
    let title;
    let button;
    // if (this.props.modal)
    title = this.props.modalAction === "signup" ? "Sign Up" : "Log In";
    button = this.props.modalAction === "signup" ? (
      <Button
      onClick={this.handleSubmit.bind(this)}
      bsStyle="primary"
      >Sign Up</Button>
    ) : (
      <Button
      onClick={this.handleSubmit.bind(this)}
      bsStyle="primary"
      >Log In</Button>
    );

    return (
      <div className="static-modal">
        <Modal show={ this.props.modalOpen } onHide={this.props.closeModal}>
          <Modal.Header closeButton>
            <Modal.Title>{ title }</Modal.Title>
          </Modal.Header>

          <Modal.Body>
            <SessionFormContainer handleUpdate={ this.handleUpdate }/>
          </Modal.Body>

          <Modal.Footer>
            <Button onClick={ this.props.closeModal }>Close</Button>
            { button }
          </Modal.Footer>
        </Modal>
      </div>
    );
  }
}