import React, { Component } from 'react';

export default class Config extends Component {
  cls1 = {
    fill: '#3c4929'
  }

  cls2 = {
    fill: '#b7ca9d'
  }

  cls3 = {
    fill: '#759c3e'
  }

  cls4 = {
    fill: '#4b612c'
  }

  render() {
    return (
      <svg id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 100 100">
        <title>ManagementTools</title>
        <polygon style={this.cls1} points="56.7 33.16 74.34 21.23 83.91 33.16 67.41 35.55 56.7 33.16"/>
        <polygon style={this.cls1} points="43.3 33.16 25.66 21.17 16.09 33.16 32.59 35.55 43.3 33.16"/>
        <polygon style={this.cls2} points="83.97 57.13 50 55.05 16.04 57.13 50 91 83.97 57.13"/>
        <polygon style={this.cls3} points="43.3 33.16 25.66 29.81 25.66 21.17 43.3 25.96 43.3 33.16"/>
        <polygon style={this.cls4} points="16.09 33.16 25.66 29.81 25.66 21.17 16.09 25.95 16.09 33.16"/>
        <polygon style={this.cls4} points="56.7 33.16 74.34 29.81 74.34 21.17 56.7 25.96 56.7 33.16"/>
        <polygon style={this.cls3} points="83.91 33.16 74.34 29.81 74.34 21.17 83.91 25.95 83.91 33.16"/>
        <polygon style={this.cls4} points="16.04 50 50 50 83.97 44.9 50 33.6 16.04 40.39 16.04 50"/>
        <polygon style={this.cls4} points="50 91 16.04 74.02 16.04 57.13 50 62.18 50 91"/>
        <polygon style={this.cls3} points="83.97 74.02 50 91 50 62.18 83.97 57.13 83.97 74.02"/>
        <polygon style={this.cls3} points="83.97 50 50 50 50 33.6 83.97 40.39 83.97 50"/>
        <polygon style={this.cls1} points="68.08 27.61 50 31.66 31.92 27.61 50 9 68.08 27.61"/>
        <polygon style={this.cls4} points="31.92 27.61 50 21.28 50 9 31.92 18.04 31.92 27.61"/>
        <polygon style={this.cls3} points="68.08 27.61 50 21.28 50 9 68.08 18.04 68.08 27.61"/>
      </svg>
    );
  }
}
