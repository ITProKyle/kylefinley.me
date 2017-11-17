import React, { Component } from 'react';
import Paper from 'material-ui/Paper';

import ProfileImage from '../components/profile_image';
import ProfileSocial from '../components/profile_social';
import ProfileBio from '../components/profile_bio';
import ProfileSkills from '../components/profile_skills';

import UnderConstruction from '../components/under_construction';

export default class ProfilePaper extends Component {
  render() {
    return (
      <div id="profile" className="profile-paper" >
        <Paper zDepth={3}>
          <ProfileImage />
          <ProfileSocial />
          <ProfileBio />
          <ProfileSkills />
        </Paper>
        <UnderConstruction />
      </div>
    );
  }
}
