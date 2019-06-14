import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';

class Input extends Component {

  render() {
    return (
      <TextField
      style={{width:'500px'}}
      multiline={true}
      placeholder={this.props.label}
      label={this.props.label}           
      onChange={this.props.onChange}
      value={this.props.value}
      margin="normal"
      variant="standard"
    />
    );
   }
  }

  export default Input;