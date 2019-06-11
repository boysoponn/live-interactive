import React, { Component } from 'react';
import Checkbox from '@material-ui/core/Checkbox';

class Input extends Component {

  render() {
    return (
      <div style={{display:'flex',justifyContent:'center',alignItems:'center'}}>
        <div>
          <img src="https://www.optimonk.com/wp-content/uploads/2018/09/12.png"/>
        </div>
        <Checkbox
          value="checkedA"
        />
      </div>
    );
   }
  }

  export default Input;