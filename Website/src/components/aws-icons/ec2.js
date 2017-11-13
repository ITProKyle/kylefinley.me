import React, { Component } from 'react';

export default class EC2 extends Component {
  cls1 = {
    fill: '#9d5025'
  };

  cls2 = {
    fill: '#f58536'
  };
  
  render() {
    return (
      <svg id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 100 100">
        <title>Compute</title>
        <polygon style={this.cls1} points="19.33 24.17 15.91 25.88 15.91 74.12 19.33 75.83 33.17 51.25 19.33 24.17"/>
        <polygon style={this.cls2} points="27.3 73.96 19.33 75.83 19.33 24.17 27.3 25.99 27.3 73.96"/>
        <polygon style={this.cls1} points="23.1 22.28 27.3 20.19 47.25 52.17 27.3 79.81 23.1 77.72 23.1 22.28"/>
        <polygon style={this.cls2} points="37.24 77 27.3 79.81 27.3 20.19 37.24 23.01 37.24 77"/>
        <polygon style={this.cls1} points="31.98 17.84 37.24 15.21 66.67 55.67 37.24 84.79 31.98 82.16 31.98 17.84"/>
        <polygon style={this.cls2} points="49.99 80.13 37.24 84.79 37.24 15.21 49.99 19.88 49.99 80.13"/>
        <polygon style={this.cls1} points="43.19 12.24 49.99 8.84 81.83 52.33 49.99 91.16 43.19 87.76 43.19 12.24"/>
        <polygon style={this.cls2} points="84.09 74.11 49.99 91.16 49.99 8.84 84.09 25.89 84.09 74.11"/>
      </svg>
    );
  }

}
