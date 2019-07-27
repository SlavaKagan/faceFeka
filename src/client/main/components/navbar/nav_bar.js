import React from 'react';

import LeftNav from './leftnav/left_nav';
import RightNav from './rightnav/right_nav';

const NavBar = ( { OnClickingSearchBar, onChangeSearchBar } ) => {
    return (
      <nav>
        <LeftNav
          OnClickingSearchBar = { OnClickingSearchBar }
          onChangeSearchBar = { onChangeSearchBar } />
        <RightNav />
      </nav>
    );
};

export default NavBar;