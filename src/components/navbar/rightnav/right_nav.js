import React from 'react';
import RightNavItem from './right_nav_item';

const RightNav = ({navitems}) => {
  const rightNavItems = navitems.map((item) => {
    return <RightNavItem name={item}/>
  });

  return(
    <div className="rightnav">
      {rightNavItems}
    </div>
  );
};

export default RightNav;