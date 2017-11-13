import React, { Component } from 'react';

export default class Route53 extends Component {
  cls1 = {
    fill: '#f58536'
  }

  cls2 = {
    fill: '#9d5025'
  }

  cls3 = {
    fill: '#6b3a19'
  }

  render() {
    return (
      <svg id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 100 100">
          <title>NetworkingContentDelivery</title>
          <polygon style={this.cls1} points="64.29 83.83 49.94 91 49.94 9 64.29 16.18 64.29 83.83"/>
          <polygon style={this.cls2} points="35.59 83.83 49.94 91 49.94 9 35.59 16.18 35.59 83.83"/>
          <polygon style={this.cls1} points="44.53 38.84 20.33 35.76 20.33 23.81 44.53 29.5 44.53 38.84"/>
          <polygon style={this.cls2} points="16 25.97 20.33 23.81 20.33 35.76 16 36.96 16 25.97"/>
          <polygon style={this.cls3} points="44.53 38.84 39.52 39.58 16 36.96 20.33 35.76 44.53 38.84"/>
          <polygon style={this.cls1} points="80.41 60.31 84 59.57 84 50 80.41 50 80.41 60.31"/>
          <polygon style={this.cls2} points="55.3 58.14 80.41 60.48 80.41 50 55.3 50 55.3 58.14"/>
        </svg>
    );
  }
}
