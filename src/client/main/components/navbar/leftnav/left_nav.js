import React from 'react';

import LeftNavItemLogo from './left_nav_item_logo';
import LeftNavItemInput from './left_nav_item_input';

const LeftNav = ( ) => {
  return(
    <div className = "leftnav" >
      <LeftNavItemLogo href = "" />
      <LeftNavItemInput />
    </div>
  );
};

export default LeftNav;