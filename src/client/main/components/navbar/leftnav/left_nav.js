import React from 'react';

import LeftNavItemLogo from './left_nav_item_logo';
import LeftNavItemInput from './left_nav_item_input';

const LeftNav = ( { OnClickingSearchBar, onChangeSearchBar } ) => {
  return(
    <div className = "leftnav" >
      <LeftNavItemLogo href = "" />
      <LeftNavItemInput
        OnClickingSearchBar = { OnClickingSearchBar }
        onChangeSearchBar = { onChangeSearchBar } />
    </div>
  );
};

export default LeftNav;