import React, { Component } from 'react';
import styled from 'styled-components'

class Preview2 extends Component {

  render() {
    return (
        <Div >
          <Div1>
            <Detail>
              <DivText>
                <P size="50px">{this.props.title1}</P>
                <P size="12px">{this.props.description1}</P>
              </DivText>
              <DivImage>
                  <Image src= {this.props.shop[this.props.product1].img} alt="img"/>
              </DivImage>
            </Detail>
          </Div1>
          <Div2>
            <Detail>
              <DivText>
                <P size="50px">{this.props.title2}</P>
                <P size="12px">{this.props.description2}</P>
              </DivText>
              <DivImage>
                <Image src= {this.props.shop[this.props.product2].img} alt="img"/>
              </DivImage>
            </Detail>
          </Div2>
        </Div>
    );
   }
  }

  export default Preview2;

  const Div = styled.div`
  position: relative;
  height: 300px;
  width: 100%;
  `;

  const Div1 = styled.div`
  position: absolute;
  height: 300px;
  width: 50%;
  `;
  
  const Div2 = styled.div`
  position: absolute;
  height: 300px;
  width: 50%;
  right:0;
  `;

  const Detail = styled.div`
  position: relative;
  height:100%;
  width: 100%;
  `;

  const DivText = styled.div`
  position: absolute;
  width: 50%;
  text-align: center;
  bottom: 50%;
  `;

  const P = styled.p`
  font-size:${props => props.size};
  color:${props => props.color};
  margin: 0;
  `;

  const DivImage = styled.div`
    position: absolute;
    width: 50%;
    right: 0;
    bottom:0;
    height:100%;
  `;

  const Image = styled.img`
    height:100%;
  `;
