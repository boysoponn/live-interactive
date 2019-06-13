import React, { Component } from 'react';
import styled from 'styled-components'
import Grid from '@material-ui/core/Grid';
class Input extends Component {

  render() {
    return (
      <Grid item xs={6}
      container
      direction="row"
      justify="center"
      alignItems="center"
      >
        <input
          type="radio"
          checked={this.props.checked}
          value={this.props.value}
          onChange={this.props.onChange}
        />
        <DivImage>
          <Image alt="img" src={this.props.img}/>
        </DivImage>
      </Grid>
    );
   }
  }

  export default Input;

  const Div = styled.div`

  `;

  const Image = styled.img`
  width:250px
  `;

  const DivImage = styled.div`
  margin:20px;
  `;