import React, { Component } from 'react';
import { Buttons } from './Buttons'
import { MathButtons } from './MathButtons'
import ToCalculate from './ToCalculate'
import Evaluate from './Evaluate'
import ClearAll from './ClearAll'
import './app.css';


// container component
class App extends Component {
  render() {
    return (
      <div className="App">

        <div id="A">
          <ToCalculate />
        </div>

        <div id="B">
          <Buttons />
          <Evaluate />
          <ClearAll />
        </div>
        <div id="C">
          <MathButtons />
        </div>
      </div>
    );
  }
}

export default App;
