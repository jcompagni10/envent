import React from 'react';
import { Link } from 'react-router-dom';

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
    let display;
    let { currentEvent } = this.props;
    let { display_elements } = currentEvent;
    if (display_elements) {
      display = display_elements.map(el => (
        <Link
          key={el}
          to={`/event_builder/${currentEvent.tag}/${el}`}
          >{`${el}`}</Link>
      ));
    }

  return (
    <div className ="nav-item-data">
      <div className="progress-bar-outer" >
        <div className="progress-bar-inner"
          style={this.state.barStyle}>
        </div>
      </div>
      { display }
    </div>
  );
}}
