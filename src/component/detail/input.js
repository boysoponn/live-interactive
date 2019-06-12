import React, { Component } from 'react';

class Input extends Component {

  render() {
    return (
        <input
            placeholder={this.props.label}
            onChange={this.props.onChange}
            value={this.props.value}
        />
    );
   }
  }

  export default Input;