import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';

class Input extends Component {

  render() {
    return (
        <TextField
        id="outlined-bare"
        defaultValue="Bare"
        margin="normal"
        variant="outlined"
        value=""
        />
    );
   }
  }

  export default Input;