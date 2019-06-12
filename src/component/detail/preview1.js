import React, { Component } from 'react';
import styled from 'styled-components'

class Preview1 extends Component {

  render() {
    return (
        <Div >
          <DivText>
            <P size="80px">{this.props.title1}</P>
            <P size="20px">{this.props.description1}</P>
          </DivText>
            <DivImage>
              <Image src= {this.props.shop[this.props.product1].img} alt="img"/>
            </DivImage>
        </Div>
    );
   }
  }

  export default Preview1;

  const Div = styled.div`
  position: relative;
  height: 300px;
  width: 100%;
  margin: 50px;
  `;

  const DivText = styled.div`
  position: absolute;
  left: 0;
  width: 70%;
  text-align: center;
  `;

  const P = styled.p`
  font-size:${props => props.size};
  color:${props => props.color};
  margin: 0;
  `;

  const DivImage = styled.div`
    position: absolute;
    height:100%;
    right: 0;
  `;

  const Image = styled.img`
    height:100%;
  `;
