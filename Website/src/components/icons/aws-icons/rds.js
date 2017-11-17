import React, { Component } from 'react';

export default class RDS extends Component {
  cls1 = {
    fill: '#2e73b8'
  }

  cls2 = {
    fill: '#5294cf'
  }

  cls3 = {
    fill: '#205b99'
  }

  cls4 = {
    fill: '#19486f'
  }

  render() {
    return (
      <svg id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 100 100">
        <title>Database</title>
        <polygon style={this.cls1} points="82 29.91 74 21.12 62.72 50 74 78.86 82 70.09 82 29.91"/>
        <polygon style={this.cls2} points="60 86 74 78.86 74 21.12 60 14 43.38 50 60 86"/>
        <polygon style={this.cls1} points="40 86 60 86 60 14 40 14 28 50 40 86"/>
        <polygon style={this.cls3} points="26 78.85 40 86 40 14 26 21.12 19.81 50 26 78.85"/>
        <polygon style={this.cls4} points="18 70.09 26 78.85 26 21.12 18 29.91 18 70.09"/>
      </svg>
    );
  }
}
