import React, { Component } from 'react';

export default class CloudFromation extends Component {
  cls1 = {
    fill: '#759c3e'
  }

  cls2 = {
    fill: '#b7ca9d'
  }

  cls3 = {
    fill: '#4b612c'
  }

  cls4 = {
    fill: '#3c4929'
  }

  render() {
    return (
      <svg id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 100 100">
        <title>ManagementTools</title>
        <polygon style={this.cls1} points="30.03 72.93 18.62 70.11 18.62 30.66 30.03 28.45 30.03 72.93"/>
        <polygon style={this.cls2} points="20.66 65.71 50.28 87.69 50.28 69.48 30.03 64.39 20.66 65.71"/>
        <polygon style={this.cls3} points="69.97 69.48 81.19 70.11 81.5 32.94 69.97 29.27 69.97 69.48"/>
        <polygon style={this.cls4} points="50.28 30.88 30.03 35.6 20.66 34.29 50.28 12.9 50.28 30.88"/>
        <polygon style={this.cls2} points="79.34 65.71 49.72 86.36 49.72 69.48 69.97 64.39 79.34 65.71"/>
        <polygon style={this.cls4} points="49.72 30.88 69.97 35.6 79.34 34.29 50 12.03 49.72 30.88"/>
        <path style={this.cls3} d="M50,9,16.32,26l0,48L50,91l8.57-40.44ZM40.12,71.55,20.66,65.71V34.29l19.46-5.84Z"/>
        <path style={this.cls1} d="M50,91l33.7-17V26L50,9Zm9.92-62.55,19.46,5.84V65.71L59.88,71.55Z"/>
      </svg>
    );
  }
}
