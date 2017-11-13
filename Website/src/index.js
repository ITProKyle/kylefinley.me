import React from 'react';
import ReactDOM from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import ProfilePaper from './containers/profile_paper';

ReactDOM.render(
  <MuiThemeProvider>
      <ProfilePaper />
  </MuiThemeProvider>
  , document.querySelector('.container'));
