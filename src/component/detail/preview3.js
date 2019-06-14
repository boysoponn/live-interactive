import React, { Component } from 'react';
import styled from 'styled-components'
import Grid from '@material-ui/core/Grid';

class Preview3 extends Component {
  state={
    open:true
  }


  render() {
    return (
      <Container >  
        <Over display={this.state.open?"block":"none"}>
          <Card >
            <Grid container>
                <Grid item xs={6}
                  container
                  direction="row"
                  justify="center"
                  alignItems="center"
                >
                  <Img src={this.props.shop[this.props.product1].img}></Img>
                </Grid>
                <Grid item xs={6}
                  container
                  direction="row"
                  justify="center"
                  alignItems="center">
                  <Text>
                    <P color="#4e4e4e" size="35px" weight="600">{this.props.title1}</P>
                    <P color="#4e4e4e" size="18px">{this.props.description1}</P>
                    <P color="#4e4e4e" size="25px" >{this.props.shop[this.props.product1].name+" "}
                      <P display="inline" color="#f00" size="35px" weight="700">{this.props.shop[this.props.product1].price}</P>
                      <P display="inline" color="#4e4e4e" size="25px" > Bath</P>
                    </P>                      
                    <Button>Buy now</Button> 
                  </Text>
                </Grid>
            </Grid>
          </Card>    
        </Over> 
      </Container>    
    );
   }
  }

  export default Preview3;

const Container = styled.div`
  margin: 2vh 0;
`;

const Card = styled.div`
  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
  transition: 0.3s; 
  height: 100%; 
  width: 100%;  
`;

const Over = styled.div`
  width: 100%;
  height: 100%;
  z-index: 50;
  background-color: #fff;
  width: 720px;
  height: 405px;
  display: ${props => props.display};
`;

const Text = styled.div`
    height: 405px;
    padding: 2px 16px;
`;

const Img = styled.img`
  height: 200px;
`;

const Button = styled.button`
  background: #900000;
  color: #fff;
  width: 100px;
  height: 30px;
  border: #a70000 2px solid;
  cursor:pointer;
`;

const P = styled.p`
  font-size:${props => props.size};
  color:${props => props.color};
  font-weight:${props => props.weight};
  display:${props => props.display?props.display:"block"};
`;