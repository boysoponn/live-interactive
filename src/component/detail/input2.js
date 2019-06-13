import React, { Component } from 'react';
import Input from './input';
import Grid from '@material-ui/core/Grid';

class Input2 extends Component {

  render() {
    return (
      <Grid container>
        <Grid item xs={6}>
          <Grid           
          container
          direction="row"
          justify="center"
          alignItems="center">
            <div>              
              <Grid item xs={12} >
                <select value={this.props.product1} onChange={this.props.onChangeProduct1}>
                  {this.props.shop.map((data) =>
                    <option key={data.id} value={data.id}>{data.name}</option>
                  )}
                </select>
              </Grid>
              <Grid item xs={12}>
                  <Input label="title 1" value={this.props.title1} onChange={this.props.onChangeTitle1}/>
              </Grid>
              <Grid item xs={12} >
                <Input label="description 1" value={this.props.description1} onChange={this.props.onChangeDescription1}/>
              </Grid>

            </div>
          </Grid>
        </Grid>
        <Grid item xs={6}>
          <Grid
            container
            direction="row"
            justify="center"
            alignItems="center"
          >
          <div>            
            <Grid item xs={12} >
              <select value={this.props.product2} onChange={this.props.onChangeProduct2}>
                {this.props.shop.map((data) =>
                  <option key={data.id} value={data.id}>{data.name}</option>
                )}
              </select>
            </Grid>
            <Grid item xs={12} >
                <Input label="title 2" value={this.props.title2} onChange={this.props.onChangeTitle2}/>
            </Grid>
            <Grid item xs={12} >
              <Input label="description 2" value={this.props.description2} onChange={this.props.onChangeDescription2}/>
            </Grid>

          </div>
          </Grid>
        </Grid>
    </Grid>
    );
   }
  }

  export default Input2;