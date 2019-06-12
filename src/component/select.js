import React, { Component } from 'react';
import styled from 'styled-components'

class Input extends Component {

  render() {
    return (
      <Div>
        <DivImage>
          <Image alt="img" src={this.props.img}/>
        </DivImage>
        <input
          type="radio"
          checked={this.props.checked}
          value={this.props.value}
          onChange={this.props.onChange}
        />
      </Div>
    );
   }
  }

  export default Input;

  const Div = styled.div`

  `;

  const Image = styled.img`
    width:50%;
  `;

  const DivImage = styled.div`
    border:5px solid #fff;
  `;