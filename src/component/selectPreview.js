import React, { Component } from 'react';
import Preview1 from './detail/preview1';
import Preview2 from './detail/preview2';
import Preview3 from './detail/preview3';
class SelectPreview extends Component {

  render() {
    return (
      this.props.select ==='A'?
      <Preview1 {...this.props}/>
      :
      this.props.select ==='B'?
      <Preview2 {...this.props}/>
      :
      this.props.select ==='C'?
      <Preview3 {...this.props}/>
      :
      null
    );
   }
  }

  export default SelectPreview;
