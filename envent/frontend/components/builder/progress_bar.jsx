import React from 'react';

export default class ProgressBar extends React.Component {
  constructor(){
    super();

    this.state = {
      barStyle: {width: "0%"}
    };
  }

  barWidth(){
    return {width: (this.props.data[0]/this.props.data[1]*100)+"%"};
  }
  componentDidMount(){
    window.setTimeout(()=>this.setState({barStyle: this.barWidth()}), 1000);
  }

  render() {
  return (
    <div className ="nav-item-data">
      <div className="progress-bar-outer" >
        <div className="progress-bar-inner"
          style={this.state.barStyle}>
        </div>
      </div>
    </div>
  );
}}
