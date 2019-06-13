import React, { Component } from 'react';
import styled from 'styled-components'
import Grid from '@material-ui/core/Grid';

class Preview1 extends Component {

  render() {
    return (
      <Div>        
        <Grid container>
            <Grid item xs={6}
              container
              direction="row"
              justify="center"
              alignItems="center"
            >
              <DivText>
                <P color="#fff" size="25px">{this.props.title1}</P>
                <P color="#fff" size="10px">{this.props.description1}</P>
                <P color="#fff" size="15px" >{this.props.shop[this.props.product1].name+" "}
                      <P display="inline" color="#000" size="15px" weight="800">{this.props.shop[this.props.product1].price}</P>
                      <P display="inline" color="#000" size="15px" weight="700"> Bath</P>
                </P>
              </DivText>
            </Grid>
            <Grid 
              item xs={6}           
              container
              direction="row"
              justify="center"
              alignItems="center">
              <DivImage>
                <Image src= {this.props.shop[this.props.product1].img} alt="img"/>
              </DivImage>
            </Grid>
        </Grid>
      </Div>    
    );
   }
  }

  export default Preview1;

  const Div = styled.div`
  margin: 10vh 0;
  height: 100px;
  width: 720px;
  background-color:#797979;
  border:2px solid #fff;
  `;

  const DivText = styled.div`
  left: 0;
  height:100px;
  text-align: center;
  `;

  const P = styled.p`
  font-size:${props => props.size};
  color:${props => props.color};
  font-weight:${props => props.weight};
  display:${props => props.display?props.display:"block"};
  margin: 0;
  `;

  const DivImage = styled.div`
    right: 0;
    height:100px;
  `;

  const Image = styled.img`
  height:100%;
  `;
