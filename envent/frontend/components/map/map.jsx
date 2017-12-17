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
      img_url: ""
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentWillMount() {
    // console.log(this.props);
    this.props.getMap(this.props.match.params.eventTag);
  }

  handleChange(title) {
    return event => this.setState({ [title]: event.target.value });
  }

  handleSubmit(event){
    debugger
    event.preventDefault();
    this.props.createMap(this.props.match.params.eventTag);
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
            onChange={this.handleChange("title")}
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
    return(
      <div >
        {display}
      </div>
    );
  }
}