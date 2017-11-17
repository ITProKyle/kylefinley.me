import React, { Component } from 'react';

export default class CodePipeline extends Component {
  cls1 = {
    fill: '#4B612C'
  }

  cls2 = {
    fill: '#759C3E'
  }

  cls3 = {
    fill: '#3C4929'
  }

  cls4 = {
    fill: '#B7CA9D'
  }

  render() {
    return (
      <svg
        version="1.1"
        id="Layer_1"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        x="0px"
        y="0px"
        width="100px"
        height="100px"
        viewBox="0 0 100 100"
      >
        <polygon style={this.cls4} points="49.3,60.6 15.4,64.9 24.9,79.2 60.2,62 	"/>
        <polygon style={this.cls3} points="49.3,40.3 83.3,36 73.8,21.7 38.4,38.9 	"/>
        <polygon style={this.cls1} points="38.4,38.9 73.8,33.2 73.8,21.7 38.4,31.2 	"/>
        <polygon style={this.cls1} points="15.4,55.3 49.3,58.7 82.6,50.5 49.3,42.3 15.4,45.7 	"/>
        <polygon style={this.cls2} points="83.3,55.3 49.3,58.7 49.3,42.3 83.3,45.7 	"/>
        <polygon style={this.cls3} points="15.4,36 49.3,9.5 67.4,31.3 31.8,38.1 	"/>
        <polygon style={this.cls1} points="15.4,26.4 49.3,9.5 49.3,25.9 15.4,36 	"/>
        <polygon style={this.cls2} points="73.8,21.7 83.3,26.4 83.3,36 73.8,33.2 	"/>
        <polygon style={this.cls2} points="60.2,62 24.9,67.7 24.9,79.2 60.2,69.7 	"/>
        <polygon style={this.cls2} points="67.4,31.3 49.3,25.9 49.3,9.5 67.4,18.5 	"/>
        <polygon style={this.cls4} points="83.3,64.9 49.3,91.5 31.2,69.6 66.8,62.8 	"/>
        <polygon style={this.cls2} points="83.3,74.5 49.3,91.5 49.3,75.1 83.3,64.9 	"/>
        <polygon style={this.cls1} points="31.2,69.6 49.3,75.1 49.3,91.5 31.2,82.4 	"/>
        <polygon style={this.cls1} points="24.9,79.2 15.4,74.5 15.4,64.9 24.9,67.7 	"/>
      </svg>
      
    );
  }
}
