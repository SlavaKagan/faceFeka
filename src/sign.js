import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Sections from './sign/components/sections/sections';

class App extends Component {
  render() {
    return(
      <div className = "big-container" >
        <Sections />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.body);