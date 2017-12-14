import React from 'react';

export default class Map extends React.Component{
  constructor(props){
    super(props);
  }

  componentDidMount(){
    debugger
    // console.log(this.props);
    this.props.getMap(this.props.match.params.eventTag);
  }

  render(){
    let { currentEvent } = this.props;
    if (!this.props.currentEvent.map) {
      return null;
    }
    let display = this.props.currentEvent.map.map(id => (
      <img
        key={id}
      />
    ));
    return(

      <div>
        <h5>{currentEvent.map.title}</h5>
        {display}
      </div>
    );
  }
}