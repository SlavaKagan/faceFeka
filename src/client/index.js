import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';

import NavBar from './main/components/navbar/nav_bar';
import Sections from './main/components/sections/sections';
import LoadingSpinner from './main/components/general_reusable/loading_spinner';

import { APIUserPathsEndpointsEnum as UserPaths } from '../server/utils/enums';
import { getFromStorage } from './sign/utils/storageMethods';
import { TokenStorageKey } from './sign/utils/constants';

class App extends Component {
  constructor( props ) {
    super( props );

    this.state = {
      loggedInUser: null
    };

    this.fetchLoggedIn = this.fetchLoggedIn.bind(this);
  }

  componentDidMount() {
    this.fetchLoggedIn();
  }

  fetchLoggedIn() {
    const { token } = getFromStorage(TokenStorageKey);
    if (!token) {
      // redirect to sign up/in
    } else {
      axios.get(`${UserPaths.VerifyToken}/${token}`).then((result) => {
        console.log(result);
        this.setState( { loggedInUser: result.data } );
      });
    }
  }

  render() {
    const isLoggedUserLoaded = this.state.loggedInUser ?
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