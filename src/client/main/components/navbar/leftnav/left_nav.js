import React from 'react';

import LeftNavItemLogo from './left_nav_item_logo';
import LeftNavItemInput from './left_nav_item_input';

const LeftNav = ( { OnClickingSearchBar } ) => {
  return(
    <div className = "leftnav" >
      <LeftNavItemLogo href = "" />
      <LeftNavItemInput OnClickingSearchBar = { OnClickingSearchBar }/>
    </div>
  );
};

export default LeftNav;