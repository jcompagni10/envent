import React from 'react';
import { Link } from 'react-router-dom';

export default class HomeLandingPage extends React.Component {
  render() {
    return (
    <div className="home-landing-page-container">
      <header
        className="landing-page-header-container">
        <h2 className="logo">
          Envent
        </h2>
        <div>
          <Link to="/signup" className="landing-page-home-link">
            LOG IN
          </Link>
          <Link to="/signup" className="landing-page-create-button">
            CREATE YOUR APP
          </Link>
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
        <Link to="/signup" className="landing-page-create-button-large">
          CREATE YOUR APP
        </Link>
      </div>

        {/* <img
          className="landing-page-background-image"
          src="https://res.cloudinary.com/trwong/image/upload/v1513238696/ezra-jeffrey-77199_yskzks.jpg"
          alt=""/> */}
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