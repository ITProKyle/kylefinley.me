import React, { Component } from 'react';
import { Card, CardHeader, CardText } from 'material-ui/Card';
import Paper from 'material-ui/Paper';

export default class ProfileBio extends Component {
  state={
    zDepth: 0
  }

  handleMouseEnter = () =>{
  	this.setState({zDepth : 3})
  }

  handleMouseLeave = () =>{
  	this.setState({zDepth : 0})
  }

  render() {
    return (
      <div>
        <Paper
          zDepth={this.state.zDepth}
          onMouseEnter={this.handleMouseEnter}
          onMouseLeave={this.handleMouseLeave}
        >
          <Card>
            <CardHeader className="card-title"
              title="Bio"
              actAsExpander={true}
              showExpandableButton={true}
            />
            <CardText expandable={true}>
              I am member of the managed services team at <a href="https://onica.com" target="_blank" className="onica-link">Onica</a> in Santa Monica, California. 
              <br />
              <br />
              My primary focus is on creates innovative solutions to meet client needs and increase team efciency by automating complex work flows and process. My collection of custom tools is constantly evolving to incorporate the feedback of fellow team members and resolutions to problems encountered while working with a multitude of diverse environments.
            </CardText>
          </Card>
        </Paper>
      </div>
    );
  }
}
