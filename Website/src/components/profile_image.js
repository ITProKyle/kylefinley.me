import React, { Component } from 'react';
import { CardMedia, CardTitle } from 'material-ui/Card';
import Paper from 'material-ui/Paper';

export default class ProfileImage extends Component {
  render() {
    return (
      <div>
        <Paper>
          <CardMedia overlay={
            <CardTitle
              title="Kyle Finley"
              subtitle="Cloud Engineer"
              className="profile-name"
            />
          }>
            <img src="https://s3-us-west-2.amazonaws.com/media.finley.sh/profile/kyle-2017_640.jpg" /> 
          </CardMedia>
        </Paper>
      </div>
    );
  }
}
