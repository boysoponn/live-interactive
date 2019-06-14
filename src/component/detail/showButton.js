import React, { Component } from 'react';
import Button from '@material-ui/core/Button';

class Input extends Component {

  render() {
    return (
      <Button variant="contained" color="primary" onClick={this.props.onClick} >
        {this.props.label}
      </Button>
    );
   }
  }

  export default Input;