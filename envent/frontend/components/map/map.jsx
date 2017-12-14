import React from 'react';

export default class Map extends React.Component{
  constructor(props){
    super(props);
  }

  componentDidMount(){
    // console.log(this.props);
    this.props.getMap(this.eventId);
  }

  render(){
    let {currentEvent} = this.props;
    console.log(currentEvent);
    if(!currentEvent.map.img_url){
      return null;
    }
    return(
      <div>
        <img src={currentEvent.map.img_url} alt=""/>
      </div>
    );
  }
}