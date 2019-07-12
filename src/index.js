import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import NavBar from './components/navbar/nav_bar';
// import SearchFriendsDropdown from './components/search_friends_dropdown';
// import SectionsContainer from './components/sections_container';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return(
      <div>
        <NavBar />
        {/*<SearchFriendsDropdown />*/}
        {/*<SectionsContainer />*/}
      </div>
    );
  }
}

ReactDOM.render(<App />, document.querySelector('.reactcontainer'));