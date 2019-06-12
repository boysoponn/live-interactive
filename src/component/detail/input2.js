import React, { Component } from 'react';
import Input from './input';
import Textarea from './textarea';
class Input2 extends Component {

  render() {
    return (
      <div>
        <div>
          <Input label="title 1" value={this.props.title1} onChange={this.props.onChangeTitle1}/>
          <Textarea label="description" value={this.props.description1} onChange={this.props.onChangeDescription1}/>
          <select value={this.props.product1} onChange={this.props.onChangeProduct1}>
            {this.props.shop.map((data) =>
              <option key={data.id} value={data.id}>{data.name}</option>
            )}
          </select>
        </div>
        <div>
          <Input label="title 2" value={this.props.title2} onChange={this.props.onChangeTitle2}/>
          <Textarea label="description 2" value={this.props.description2} onChange={this.props.onChangeDescription2}/>
          <select value={this.props.product2} onChange={this.props.onChangeProduct2}>
            {this.props.shop.map((data) =>
              <option key={data.id} value={data.id}>{data.name}</option>
            )}
          </select>
        </div>
      </div>
    );
   }
  }

  export default Input2;