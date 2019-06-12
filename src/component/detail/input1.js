import React, { Component } from 'react';
import Input from './input';
import Textarea from './textarea';

class Input1 extends Component {

  render() {
    return (
      <div>
        <Input label="title" value={this.props.title1} onChange={this.props.onChangeTitle1}/>
        <Textarea label="description" value={this.props.description1} onChange={this.props.onChangeDescription1}/>
        <select value={this.props.product1} onChange={this.props.onChangeProduct1}>
          {this.props.shop.map((data) =>
            <option key={data.id} value={data.id}>{data.name}</option>
          )}
        </select>
      </div>
    );
   }
  }

  export default Input1;