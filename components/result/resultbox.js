import React, { Component } from 'react';
import './result.css';
import Result from './result.js';

class ResultBox extends Component {

  constructor(){
    super()
  }

  render(){
    return (
    <div>
        <Result></Result>
    </div>
    )

}
  }

export default ResultBox;