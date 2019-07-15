import React from 'react';

import LeftNav from './leftnav/left_nav';
import SearchFriendsDropdown from './searchdropdown/search_friends_dropdown';
import RightNav from './rightnav/right_nav';

const NavBar = ( ) => {
  return(
    <nav>
      <LeftNav />
      <SearchFriendsDropdown />
      <RightNav />
    </nav>
  );
};

export default NavBar;