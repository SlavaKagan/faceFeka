import React from 'react';
import LeftNav from './leftnav/left_nav';
import RightNav from './rightnav/right_nav';

const NavBar = (props) => {
  return(
    <>
      <LeftNav />
      <RightNav navitems = { [ 'Home', 'Profile', 'Friends', 'Notifications' ] }/>
    </>
  );
};

export default NavBar;