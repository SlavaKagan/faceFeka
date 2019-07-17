import React from 'react';

import RightNavItem from './right_nav_item';

import { RightNavBarPagesEnum } from '../../../enums';
import { getItemsArrayFromEnum } from '../../../helperMethods';

const RightNav = ( ) => {
  const navitems = getItemsArrayFromEnum(RightNavBarPagesEnum).map( (navItem) => {
    return(
      <RightNavItem name = { navItem.name } href = { navItem.href } >
        <navItem.svg />
      </RightNavItem>
    );
  });

  return(
    <div className = "rightnav">
      {navitems}
    </div>
  );
};

export default RightNav;