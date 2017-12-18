import React from 'react';
import Dropzone from 'react-dropzone';
import request from 'superagent';
import { FormControl } from 'react-bootstrap';

const CLOUDINARY_UPLOAD_PRESET = "umzpk5ol";
const CLOUDINARY_UPLOAD_URL = 'https://api.cloudinary.com/v1_1/trwong/image/upload';

export default class Map extends React.Component{
  constructor(props){
    super(props);

    this.state = {
      title: "", 
      img_url: '',
      id: undefined
      // eventTag: undefined,
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleTitle = this.handleTitle.bind(this);
  }

  componentDidMount() {
    // console.log(this.props);
    
    this.props.getMap(this.props.match.params.eventId);
  }

  componentWillReceiveProps(newProps){
    if (newProps.maps.length > 0 ){
      this.setState({ 
        img_url: newProps.maps[0].img_url,
        id: newProps.maps[0].id,
        title: newProps.maps[0].title
        
      });
    }
    // }
  }

  handleChange(title) {
    //
    return event => this.setState({ [title]: event.target.value });
  }

  handleTitle(event) {
    this.setState({ title: event.target.value });
  }

  handleSubmit(action = "create"){
    // action.preventDefault();
    let map = Object.assign({}, this.state);
    // this.setState({eventTag: this.props.match.params.eventTag});
    // let newMap = this.state;
    // newMap[eventTag] = this.props.match.params.eventTag;
    debugger
    if (!this.state.id){
      this.props.createMap(this.props.match.params.eventId, this.state);
      // this.props.history.push(`/event_builder/${event.tag}/map`);
    } else {
      // this.setState({id: this.props.maps[0].id});
      this.props.updateMap(this.props.match.params.eventId, this.state);
      // this.props.history.push(`/event_builder/${this.props.maps[0].event_id}/map`);
    }
  }
  
  onImageDrop(files){
    this.handleImageUpload(files[0]);
  }

  handleImageUpload(file) {
    let upload = request.post(CLOUDINARY_UPLOAD_URL)
      .field('upload_preset', CLOUDINARY_UPLOAD_PRESET)
      .field('file', file);

    upload.end((err, response) => {
      if (err) {
        console.error(err);
      }

      if (response.body.secure_url !== '') {
        this.setState({
          img_url: response.body.secure_url
        });
      }
    });
  }

  render(){
    
    // let { currentEvent } = this.props;
    // if (this.props.maps.length === 0) {
    //  return (
    //   <div height='150' width ='150'>
        
    //   </div>);
    // }
    // let display = this.props.maps(map => (
      // <div>
      //   <h5>{map.title}</h5>
      //   <img
      //   src={this.state.img_url}
      //   />
      //   <form action="">
      //     <input
      //       onChange={ this.handleTitle }
      //       // onChange={ this.handleChange("title") }
      //       type="text"
      //       name="title"
      //       placeholder="Map Title" />
      //     <Dropzone
      //       multiple={false}
      //       accept="image/*"
      //       onDrop={this.onImageDrop.bind(this)}>
      //       <p>Drop an image or click to select a file to upload.</p>
      //     </Dropzone>
      //     <input
      //       onClick={this.handleSubmit}
      //       type="submit" />
      //   </form>
      
      // </div>
    // ));
    
    return(
      <div className="map-page">
        {/* {display} */}
        <div className="map-left-container">
          
          <h2>Map</h2>
          <form className="map-form" action="">
            <FormControl
              className="map-title-input"
              onChange={this.handleTitle}
              // onChange={ this.handleChange("title") }
              type="text"
              name="title"
              placeholder="Map Title" />
            <Dropzone
              className="map-dropzone"
              multiple={false}
              accept="image/*"
              onDrop={this.onImageDrop.bind(this)}>
              <p>Drop an image or click to select a file to upload.</p>
            </Dropzone>
            <button
              className="btn btn-primary"
              onClick={this.handleSubmit}
              type="submit">
              Submit
            </button>
          </form>
        </div>

        <div className="map-right-container">
          <h3>{this.state.title}</h3>
          <img
            className="img-view"
            src={this.state.img_url}
          />
        </div>
      </div>
    );
  }
}