import React from 'react';

import LeftNav from './leftnav/left_nav';
import RightNav from './rightnav/right_nav';

const NavBar = () => {
    return (
      <nav>
        <LeftNav />
        <RightNav />
      </nav>
    );
};

export default NavBar;