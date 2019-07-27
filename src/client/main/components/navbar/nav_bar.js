import React from 'react';

import LeftNav from './leftnav/left_nav';
import RightNav from './rightnav/right_nav';

const NavBar = ( { OnClickingSearchBar } ) => {
    return (
      <nav>
        <LeftNav OnClickingSearchBar = { OnClickingSearchBar }/>
        <RightNav />
      </nav>
    );
};

export default NavBar;