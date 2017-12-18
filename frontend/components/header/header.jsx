import React from 'react';
import { Navbar, Nav, NavItem } from 'react-bootstrap';

export default class Header extends React.Component {


  render() {
    return (
      <Navbar>
        <Navbar.Header>
          <Navbar.Brand>
            <a href="#"><img className="header-logo" src="https://res.cloudinary.com/trwong/image/upload/v1513571017/e11e34d6-fd58-4474-a0ea-2ab954ca0f38_gsrdm7.png" alt=""/></a>
          </Navbar.Brand>
        </Navbar.Header>
        <Nav>
          <NavItem
            href="#/dashboard"
            eventKey={1} >Home</NavItem>
          <NavItem
            href="#/event"
            eventKey={2}>Your Events</NavItem>
          <NavItem
            href="#/event_builder"
            eventKey={3}>App Builder</NavItem>
          <NavItem
            href="#/"
            onClick={ this.props.logout }
            eventKey={4}>Logout</NavItem>
        </Nav>
      </Navbar>
    );
  }

  // render(){
  //   return (
  //     <nav className="navbar navbar-toggleable-md navbar-light bg-faded">
  //       <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
  //         <span className="navbar-toggler-icon"></span>
  //       </button>
  //       <a className="navbar-brand" href="#">Envent</a>

  //       <div className="collapse navbar-collapse" id="navbarSupportedContent">
  //         <ul className="navbar-nav mr-auto">
  //           <li className="nav-item active">
  //             <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
  //           </li>
  //           <li className="nav-item active">
  //             <a className="nav-link" href="#/event_builder">Create Event <span className="sr-only">(current)</span></a>
  //           </li>
  //           <li className="nav-item active">
  //             <a className="nav-link" href="#/event">Your Events <span className="sr-only">(current)</span></a>
  //           </li>
  //           {/* <li className="nav-item">
  //             <a className="nav-link" href="#">Link</a>
  //           </li>
  //           <li className="nav-item">
  //             <a className="nav-link disabled" href="#">Disabled</a>
  //           </li> */}
  //         </ul>
  //         <button
  //           className ="btn btn-secondary"
  //           onClick ={this.props.logout}>
  //           Log Out
  //         </button>
  //       </div>
  //     </nav>
  //   );
  // }
}
