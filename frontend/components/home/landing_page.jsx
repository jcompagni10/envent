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
            <img
              className="home-landing-page-logo"
              src="https://res.cloudinary.com/trwong/image/upload/v1513580523/ed369475-e5d9-4d9c-ba34-fbca27d091c5_ybh1an.png"
              alt=""/>
        </h2>
        <div>
          <button onClick={ () => this.openModal("login") } className="landing-page-home-link">
            LOG IN
          </button>
          <button onClick={ () => this.openModal("signup") } className="landing-page-create-button">
            CREATE YOUR APP
          </button>
        </div>
      </header>
      <div className="landing-page-main-container">
        <div className="landing-page-section-big">
          <div>Innovate Your Event. Be Inspirational.</div>
          <div>
            <button onClick={ () => this.openModal("login") } className="landing-page-home-link">
              LOG IN
            </button>
            <button onClick={ () => this.openModal("signup") } className="landing-page-create-button">
              CREATE YOUR APP
            </button>
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
            <h3>Engage participants. Interact with your audience. Create inspiring meetings</h3>
            <h3 className="second-element">Your next successful event stars with Envent</h3>
          </div>
            <button onClick={ () => this.openModal("signup") } className="landing-page-create-button-large">
            CREATE YOUR APP
          </button>
        </div>
        <div className="landing-page-section-medium">
          <h2>Create Amazing Experiences with</h2>
          <h2 className="second-element">Your Own Custom Mobile Event App</h2>
        </div>
        <div className="landing-page-section-small">
          <h3>Engage participants. Interact with your audience. Create inspiring meetings</h3>
          <h3 className="second-element">Your next successful event starts with Envent</h3>
        </div>
          <button onClick={ () => this.openModal("signup") } className="landing-page-create-button-large">
          CREATE YOUR APP
        </button>
      </div>

      <SessionModalContainer
        modalOpen= { this.state.modalOpen }
        closeModal= { this.closeModal }
        modalAction = { this.state.modalAction }
      />
      {/* <SessionModal
        modalOpen= {this.state.modalOpen}
        closeModal= {this.closeModal.bind(this)}
      /> */}
        <div className="landing-page-background-image" > </div>
         <div className="landing-page-opaque-background" ></div>
        <div className ="landing-bottom-section">
          <h2> Build An App For Any Occasion</h2>
          <div className ="demo-area">
            <div className ="demo-phone">
              <iframe src="https://appetize.io/embed/hx3jm79301z2cuttqmgqjeadnc?device=iphone6s&scale=60&orientation=portrait&osVersion=11.1" width="300px" height="525px" frameBorder="0" scrolling="no"></iframe>
              <div className="demo-pinfo">
                Get the full Envent experience by logging in the with the <u><i>envent2018</i></u> tag.
              </div>
            </div>
            <ul className ="demo-info">
              <li>
                <h4>Infinitely Customizable</h4>
                <p>
                  Envent allows users to create custom mobile apps for events of all kinds. Each app can be
                  customized to support a range of features including schedules, news, message boards and maps.
                </p>
              </li>
              <li>
                <h4>Easy To build</h4>
                <p>
                  Building an Envent app couldn't be easier with our ultra-simple CMS system. But the resulting app will be anything but simple with its rich, integrated design.
                </p>
              </li>
              <li>
                <h4>Sensible Styling</h4>
                <p>
                  Crafted with an appealing modern aesthetic that will be suitable for any event from hip music festivals to corporate conferences.
                </p>
              </li>
              <li>
                <h4>Built For Users</h4>
                <p>
                  Ease of use is our number one concern. Our apps are designed to foster an enjoyable and intuitive experience for the end user.
                </p>
              </li>
            </ul>
          </div>
        </div>
    </div>
    );
  }
}
