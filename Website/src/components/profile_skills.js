import React, { Component } from 'react';
import Avatar from 'material-ui/Avatar';
import { Card, CardHeader, CardText } from 'material-ui/Card';
import Chip from 'material-ui/Chip';
import Divider from 'material-ui/Divider';
import Paper from 'material-ui/Paper';

import EC2 from './aws-icons/ec2'

export default class ProfileSkills extends Component {
  state={
    zDepth: 0,
    chipData: [
      {key: 0, label: 'AWS EC2', icon: <EC2 />}
    ]
  }

  handleMouseEnter = () =>{
  	this.setState({zDepth : 3})
  }

  handleMouseLeave = () =>{
  	this.setState({zDepth : 0})
  }

  renderChip(data) {
    return (
      <Chip key={data.key}>
        <Avatar icon={data.icon} />
        {data.label}
      </Chip>
    )
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
              title="Skills"
              actAsExpander={true}
              showExpandableButton={true}
            />

            <CardText expandable={true}>
            <h4>Technologies</h4>
            {this.state.chipData.map(this.renderChip, this)}
            <br />
            <br />
            <Divider />
            <h4>Languages</h4>

            </CardText>

          </Card>
        </Paper>
      </div>
    );
  }
}
