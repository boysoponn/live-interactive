import React, { Component } from 'react';
import styled from 'styled-components'

class Preview1 extends Component {

  render() {
    return (
        <Div >
          <DivText>
            <P color="#fff" size="80px">{this.props.title1}</P>
            <P color="#fff" size="20px">{this.props.description1}</P>
            <P color="#fff" size="15px" >{this.props.shop[this.props.product1].name+" "}
                  <P display="inline" color="#000" size="15px" weight="800">{this.props.shop[this.props.product1].price}</P>
                  <P display="inline" color="#000" size="15px" weight="700"> Bath</P>
            </P>
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
  font-weight:${props => props.weight};
  display:${props => props.display?props.display:"block"};
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
