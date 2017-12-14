import React from 'react';

export default class Map extends React.Component{
  constructor(props){
    super(props);
  }

  componentWillMount(){
    debugger
    // console.log(this.props);
    this.props.getMap(this.props.match.params.eventTag);
  }

  test(){
    debugger
  }
  render(){
    
    debugger
    // let { currentEvent } = this.props;
    if (this.props.maps.length === 0) {
     return (
     <div height="200" width ='200' onClick = {
        this.test.bind(this) }>
      </div>);
    }
    let display = this.props.maps.map(map => (
      <div>
        <h5>{map.title}</h5>
        <img
        src={map.img_url}
      />
      </div>
    ));
    return(
      <div >
        {display}
      </div>
    );
  }
}