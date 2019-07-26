import React, { Component } from 'react';

import LeftNav from './leftnav/left_nav';
import SearchFriendsDropdown from './searchdropdown/search_friends_dropdown';
import RightNav from './rightnav/right_nav';

class NavBar extends Component {
  constructor( props ) {
    super( props );

    this.state = {
      isSearchFriendsVisible: false
    };
  };


  render() {
    return (
      <nav>
        <LeftNav />
        <SearchFriendsDropdown isSearchFriendsVisible = { this.state.isSearchFriendsVisible } />
        <RightNav />
      </nav>
    );
  }
}

export default NavBar;