import React, { Component } from 'react';
import Preview1 from './detail/preview1';
import Preview2 from './detail/preview2';

class SelectPreview extends Component {

  render() {
    return (
      this.props.select ==='A'?
      <Preview1 {...this.props}/>
      :
      this.props.select ==='B'?
      <Preview2 {...this.props}/>
      :null
    );
   }
  }

  export default SelectPreview;
