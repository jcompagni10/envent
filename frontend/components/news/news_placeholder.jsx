import React from 'react';

export default class NewsPlaceholder extends React.Component {
  constructor(props) {
    super(props);
  }
 

  render() {
    return (
      <div className="news-placeholder-container">
        <div>
         To add news to your event, please use the Envent mobile app.
        </div>
        
        <br/>
        <br/>

        <div>
          You can access your app by installing Envent on the App Store or Play Store and use your event tag to log in.
        </div>
      </div>
    );
  }
}
