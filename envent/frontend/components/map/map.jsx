import React from 'react';

export default class Map extends React.Component{
  constructor(props){
    super(props);
  }

  render(){
    debugger
    if(!this.props.map.img_url){
      return null;
    }
    return(
      <div>
        <img src={this.props.map.img_url} alt=""/>
      </div>
    );
  }
}