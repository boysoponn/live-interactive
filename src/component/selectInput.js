import React, { Component } from 'react';
import Input1 from './detail/input1';
import Input2 from './detail/input2';

class SelectInput extends Component {

  render() {
    return (
      this.props.select==='A'?
      <Input1  {...this.props}/>
      :
      this.props.select==='B'?
      <Input2 {...this.props}/>
      :null
    );
   }
  }

  export default SelectInput;