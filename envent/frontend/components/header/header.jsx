import React from 'react';

export default class Header extends React.Component {

  render(){
    return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="navbar-brand">
          <h2>Envent</h2>
         </div>
        {this.props.currentUser.email}
        <button
          className ="btn btn-secondary"
          onClick ={this.props.logout}>
          Log Out
        </button>
      </nav>
    );
  }
}
