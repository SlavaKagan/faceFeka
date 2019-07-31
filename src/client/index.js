import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import axiosFetch from './utils/axiosSession';

import NavBar from './main/components/navbar/nav_bar';
import Sections from './main/components/sections/sections';
import LoadingSpinner from './main/components/general_reusable/loading_spinner';

import { APIUserPathsEndpointsEnum as UserPaths } from './utils/server_endpoints';
import SearchFriendsDropdown from './main/components/searchdropdown/search_friends_dropdown';

class App extends Component {
  constructor( props ) {
    super( props );

    this.state = {
      loggedInUser: null,
      isSearchFriendsMenuVisible: false,
      searchBarContent: '*'
    };

    this.fetchLoggedIn = this.fetchLoggedIn.bind(this);
  }

  componentDidMount() {
    this.fetchLoggedIn();
  }

  fetchLoggedIn() {
    axiosFetch.get(UserPaths.VerifyToken)
      .then(( result ) => {
        console.log(result);
        this.setState( { loggedInUser: result.data } );
      }).catch((error) => {
        console.log(error);
        window.location = '/sign.html';
      });
  }

  render() {
    const isLoggedUserLoaded = this.state.loggedInUser ?
      <Sections loggedInUser = { this.state.loggedInUser } /> :
      <LoadingSpinner />;

    return(
      <>
        <NavBar
          OnClickingSearchBar = { () => this.setState( { isSearchFriendsMenuVisible: true } ) }
          onChangeSearchBar = { (event) => this.setState( { searchBarContent: event.target.value } ) } />
        <SearchFriendsDropdown
          isSearchFriendsVisible = { this.state.isSearchFriendsMenuVisible }
          searchTerm = { this.state.searchBarContent }
          onCloseXButton = { () => this.setState( { isSearchFriendsMenuVisible: !this.state.isSearchFriendsMenuVisible } ) } />
        { isLoggedUserLoaded }
      </>
    )
  }
}

ReactDOM.render(<App />, document.body);