import React from 'react';
import Snackbar from 'material-ui/Snackbar';

export default class UnderConstruction extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      open: true,
    };
  }

  handleRequestClose = () => {
    this.setState({
      open: false,
    });
  };

  handleActionTouchTap = () => {
    this.setState({
      open: false,
    });
  };

  render() {
    return (
      <div>
        <Snackbar
          open={this.state.open}
          message="Under Constriction"
          action="close"
          onActionTouchTap={this.handleActionTouchTap}
          onRequestClose={this.handleRequestClose}
        />
      </div>
    );
  }
}
