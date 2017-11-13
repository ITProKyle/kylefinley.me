import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import ProfilePaper from './containers/profile_paper';

const createStoreWithMiddleware = applyMiddleware()(createStore);

ReactDOM.render(
  <MuiThemeProvider>
    <Provider store={createStoreWithMiddleware(reducers)}>
      <ProfilePaper />
    </Provider>
  </MuiThemeProvider>
  , document.querySelector('.container'));
