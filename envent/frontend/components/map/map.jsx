import React from 'react';
import Dropzone from 'react-dropzone';
import request from 'superagent';

const CLOUDINARY_UPLOAD_PRESET = "umzpk5ol";
const CLOUDINARY_UPLOAD_URL = 'https://api.cloudinary.com/v1_1/trwong/image/upload';

export default class Map extends React.Component{
  constructor(props){
    super(props);

    this.state = {
      title: "", 
      img_url: ``,
      // eventTag: undefined,
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleTitle = this.handleTitle.bind(this);
  }

  componentDidMount() {
    debugger
    // console.log(this.props);
    this.props.getMap(this.props.match.params.eventTag);
  }

  componentWillReceiveProps(newProps){
    debugger
    // if (this.props.maps[0])
    // if (this.props.maps[0].img_url !== newProps.maps[0].img_url){
      this.setState({ img_url: newProps.maps[0].img_url});
    // }
  }

  handleChange(title) {
    // debugger
    return event => this.setState({ [title]: event.target.value });
  }

  handleTitle(event) {
    this.setState({ title: event.target.value });
  }

  handleSubmit(action = "create"){
    debugger
    action.preventDefault();
    let map = Object.assign({}, this.state);
    // this.setState({eventTag: this.props.match.params.eventTag});
    // let newMap = this.state;
    // newMap[eventTag] = this.props.match.params.eventTag;
    if (action === "create"){
      this.props.createMap(this.props.match.params.eventTag, this.state);
      this.props.history.push(`/event_builder/${event.tag}/map`);
    } else {
      this.props.updateMap(this.props.match.params.eventTag, this.state);
      this.props.history.push(`/event_builder/${event.tag}/map`);
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
    debugger
    // let { currentEvent } = this.props;
    if (this.props.maps.length === 0) {
     return (
      <div height='150' width ='150'>
        
      </div>);
    }
    let display = this.props.maps.map(map => (
      <div>
        <h5>{map.title}</h5>
        <img
        src={this.state.img_url}
        />
        <form action="">
          <input
            onChange={ this.handleTitle }
            // onChange={ this.handleChange("title") }
            type="text"
            name="title"
            placeholder="Map Title" />
          <Dropzone
            multiple={false}
            accept="image/*"
            onDrop={this.onImageDrop.bind(this)}>
            <p>Drop an image or click to select a file to upload.</p>
          </Dropzone>
          <input
            onClick={this.handleSubmit}
            type="submit" />
        </form>
      
      </div>
    ));
    debugger
    return(
      <div >
        {display}
      </div>
    );
  }
}