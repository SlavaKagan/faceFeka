import React from 'react';

import RightNavItem from './right_nav_item';

import { RightNavBarPagesEnum } from '../../../enums';
import { getItemsArrayFromEnum } from '../../../helperMethods';

const RightNav = ( ) => {
  const navitems = getItemsArrayFromEnum(RightNavBarPagesEnum).map( (item) => {
    return(
      <RightNavItem name = { item.name } href = { item.href } >
        <item.svg />
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