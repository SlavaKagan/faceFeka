import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import NavBar from './main/components/navbar/nav_bar';
import Sections from './main/components/sections/sections';

class App extends Component {
  constructor( props ) {
    super( props );

    this.state = {
      loggedInUser: {
        id: 1,
        picture: '../resources/img/profilepicdemo/profile.jpg',
        name: {
          first: 'Lorem',
          last: 'Ipsum Dolor',
        },
        friends: {},
        posts: []
      },
      allUsers: []
    };
    this.changeUserLoggedIn = this.changeUserLoggedIn.bind(this);
  }

  render() {
    return(
      <>
        <NavBar />
        <Sections
          loggedInUser = { this.state.loggedInUser } />
      </>
    );
  }

  changeUserLoggedIn(newLoggedInUser) {
    this.setState( { loggedInUser: newLoggedInUser } );
  }
}

ReactDOM.render(<App />, document.body);