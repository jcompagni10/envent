import React from 'react';

export default class Map extends React.Component{
  constructor(props){
    super(props);
  }

  render(){
    console.log(this.props);
    return(
      <div>
        <img src={this.state.maps.img_url} alt=""/>
      </div>
    );
  }
}