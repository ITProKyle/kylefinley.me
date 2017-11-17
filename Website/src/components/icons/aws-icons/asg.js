import React, { Component } from 'react';

export default class ASG extends Component {
  cls1 = {
    fill: '#9d5025'
  }

  cls2 = {
    fill: '#f58536'
  }

  render() {
    return (
      <svg id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 100 100">
        <title>Compute</title>
        <polygon style={this.cls1} points="59.03 69.58 59.03 59.11 54.57 54.66 51.63 51.71 54.57 48.77 59.03 44.31 59.03 33.84 59.03 33.59 64.26 33.59 64.26 30.17 50 20.38 35.74 30.17 35.74 33.59 40.97 33.59 40.97 33.84 40.97 44.31 45.43 48.77 48.37 51.71 45.43 54.66 40.97 59.11 40.97 69.58 35.74 66.41 35.74 69.83 50 84.09 64.26 69.83 64.26 66.41 59.03 69.58"/>
        <polygon style={this.cls1} points="41.71 51.71 41.71 48.29 27.45 44.27 14.45 44.27 14.45 59.15 27.45 59.15 27.45 65.97 41.71 51.71"/>
        <polygon style={this.cls1} points="85.55 44.27 72.56 44.27 58.29 48.29 58.29 51.71 72.56 65.97 72.56 59.15 85.55 59.15 85.55 44.27"/>
        <polygon style={this.cls2} points="59.03 66.16 59.03 55.69 54.57 51.23 51.63 48.29 54.57 45.34 59.03 40.89 59.03 30.42 59.03 30.17 64.26 30.17 50 15.91 35.74 30.17 40.97 30.17 40.97 30.42 40.97 40.89 45.43 45.34 48.37 48.29 45.43 51.23 40.97 55.69 40.97 66.16 40.97 66.41 35.74 66.41 50 80.67 64.26 66.41 59.03 66.41 59.03 66.16"/>
        <polygon style={this.cls2} points="41.71 48.29 27.45 34.02 27.45 40.85 14.45 40.85 14.45 55.73 27.45 55.73 27.45 62.55 41.71 48.29"/>
        <polygon style={this.cls2} points="85.55 40.85 72.56 40.85 72.56 34.02 58.29 48.29 72.56 62.55 72.56 55.73 85.55 55.73 85.55 40.85"/>
      </svg>
    )
  }
}