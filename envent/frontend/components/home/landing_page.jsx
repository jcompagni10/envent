import React from 'react';
import { Link } from 'react-router-dom';
import { Modal, Button } from 'react-bootstrap';
import SessionModalContainer from './session_modal_container';

export default class HomeLandingPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modalOpen: false,
      modalAction: "signup",
    };

    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  openModal( action="signup" ) {
    this.setState({modalOpen: true, modalAction: action});
  }

  closeModal() {
    this.setState({modalOpen: false});
  }

  render() {

    return (
    <div className="home-landing-page-container">
      <header
        className="landing-page-header-container">
        <h2 className="logo">
          Envent
        </h2>
        <div>
          <Button onClick={ () => this.openModal("login") } className="landing-page-home-link">
            LOG IN
          </Button>
          <Button onClick={ this.openModal } className="landing-page-create-button">
            CREATE YOUR APP
          </Button>
        </div>
      </header>
      <div className="landing-page-main-container">
        <div className="landing-page-section-big">
          <div>Innovate Your Event. Be Inspirational.</div>
          <div>
            <strong
              className="landing-page-emphasis second-element"
              >Take The Lead.</strong>
          </div>
        </div>
        <div className="landing-page-section-medium">
          <h2>Create Amazing Experiences with</h2>
          <h2 className="second-element">Your Own Custom Mobile Event App</h2>
        </div>
        <div className="landing-page-section-small">
          <h3>Engage participants. Interact with your audience. Create inspirin meetings</h3>
          <h3 className="second-element">Your next successful event stars with Envent</h3>
        </div>
        <Button onClick={ this.openModal } className="landing-page-create-button-large">
          CREATE YOUR APP
        </Button>
      </div>

      <SessionModalContainer 
        modalOpen= { this.state.modalOpen }
        closeModal= { this.closeModal }
        modalAction = { this.state.modalAction }
      />
      
        <div
          className="landing-page-background-image"
          ></div>
        <div
          className="landing-page-opaque-background"
          ></div>
    </div>
    );
  }
}

