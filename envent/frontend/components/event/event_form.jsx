import React from 'react';

export default class EventForm extends React.Component{
  constructor(){
    super();
    this.state = {
      name: "",
      tag: "",
      modules: []
    };
  }
}
