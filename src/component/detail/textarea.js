import React, { Component } from 'react';

class Textarea extends Component {

  render() {
    return (
        <textarea rows="4" cols="50"
            placeholder={this.props.label}
            onChange={this.props.onChange}
            value={this.props.value}
        />
    );
   }
  }

  export default Textarea;