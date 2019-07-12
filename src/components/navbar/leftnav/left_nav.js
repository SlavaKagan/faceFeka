import React from 'react';
import LeftNavItemLogo from './left_nav_item_logo';
import LeftNavItemInput from './left_nav_item_input';

const LeftNav = (props) => {
  return(
    <div className="leftnav">
      <LeftNavItemLogo />
      <LeftNavItemInput />
    </div>
  );
};

export default LeftNav;