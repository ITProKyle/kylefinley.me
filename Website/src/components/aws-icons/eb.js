import React, { Component } from 'react';

export default class EB extends Component {
  cls1 = {
    fill: '#9d5025'
  }

  cls2 = {
    fill: '#f58536'
  }

  cls3 = {
    fill: '#6b3a19'
  }

  cls4 = {
    fill: 'fbbf93'
  }

  render() {
    return (
      <svg id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 100 100">
        <title>Compute</title>
        <polygon style={this.cls1} points="39.8 13.94 39.8 50 35.59 50 35.59 83.96 50 91.16 58.67 50 50 8.84 39.8 13.94"/>
        <polygon style={this.cls2} points="50 8.84 50 50 50 91.16 60.2 86.06 60.2 50 64.41 50 64.41 16.04 50 8.84"/>
        <polygon style={this.cls3} points="79.74 39.48 61.51 41.2 55.52 40.45 74.52 21.1 79.74 39.48"/>
        <polygon style={this.cls2} points="74.52 21.1 79.74 23.71 79.74 39.48 74.52 38.44 74.52 21.1"/>
        <polygon style={this.cls1} points="55.52 40.45 74.52 38.44 74.52 21.1 55.52 26.24 55.52 40.45"/>
        <polygon style={this.cls4} points="20.26 60.52 38.49 58.8 44.48 59.55 25.48 78.9 20.26 60.52"/>
        <polygon style={this.cls1} points="25.48 78.9 20.26 76.29 20.26 60.52 25.48 61.62 25.48 78.9"/>
        <polygon style={this.cls2} points="44.48 59.55 25.48 61.62 25.48 78.9 44.48 73.76 44.48 59.55"/>
      </svg>
    );
  }
}
