import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import Sections from './sign/components/sections/sections';

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <div className = "big-container" >
        <Sections />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.body);