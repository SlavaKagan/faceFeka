import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';

import NavBar from './main/components/navbar/nav_bar';
import Sections from './main/components/sections/sections';
import LoadingSpinner from './main/components/general_reusable/loading_spinner';

import { APIUserPathsEndpointsEnum as UserPaths } from '../server/utils/enums';
import { getFromStorage } from './sign/utils/storageMethods';
import { TokenStorageKey } from './sign/utils/constants';
import SearchFriendsDropdown from './main/components/searchdropdown/search_friends_dropdown';

class App extends Component {
  constructor( props ) {
    super( props );

    this.state = {
      loggedInUser: null,
      isSearchFriendsMenuVisible: true
    };

    this.fetchLoggedIn = this.fetchLoggedIn.bind(this);
  }

  componentDidMount() {
    this.fetchLoggedIn();
  }

  fetchLoggedIn() {
    const tokenObj = getFromStorage(TokenStorageKey);
    if (!tokenObj) {
      window.location = '/sign.html';
    }
    const { token } = tokenObj;
    axios.get(`${UserPaths.VerifyToken}`, { headers: { "Authorization": `Bearer ${token}` } })
      .then(( result ) => {
        console.log(result);
        this.setState( { loggedInUser: result.data } );
      }).catch((error) => {
        console.log(error);
      });
  }

  render() {
    const isLoggedUserLoaded = this.state.loggedInUser ?
      <Sections loggedInUser = { this.state.loggedInUser } /> :
      <LoadingSpinner />;

    return(
      <>
        <NavBar />
        <SearchFriendsDropdown isSearchFriendsVisible = { this.state.isSearchFriendsMenuVisible } />
        { isLoggedUserLoaded }
      </>
    )
  }
}

ReactDOM.render(<App />, document.body);