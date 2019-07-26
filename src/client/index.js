import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';

import NavBar from './main/components/navbar/nav_bar';
import Sections from './main/components/sections/sections';
import LoadingSpinner from './main/components/general_reusable/loading_spinner';

import { APIUserPathsEndpointsEnum as UserPaths } from '../server/utils/enums';

class App extends Component {
  constructor( props ) {
    super( props );

    this.state = {
      loggedInUser: null,
      users: null
    };

    this.fetchUsersAndLoggedInUser = this.fetchUsersAndLoggedInUser.bind(this);
  }

  componentDidMount() {
    this.fetchUsersAndLoggedInUser();
  }

  fetchUsersAndLoggedInUser() {
    axios.get(UserPaths.Users).then(( { data } ) => {
      this.setState( { users: data } );
      // this.setState( { loggedInUser: this.state.users[0] } );
    }).catch((error) => {
      console.log(error);
    });
  }

  render() {
    const isLoggedUserLoaded = this.state.isLoading ?
      <Sections loggedInUser = { this.state.loggedInUser } /> :
      <LoadingSpinner />;

    return(
      <>
        <NavBar />
        { isLoggedUserLoaded }
      </>
    );
  }
}

ReactDOM.render(<App />, document.body);