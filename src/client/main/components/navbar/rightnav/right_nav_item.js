import React from 'react';

const RightNavItem = ( { href, name, children } ) => {
  return(
    <div>
      <a href = { href } >
        { children }
        <span>{ name }</span>
      </a>
    </div>
  );
};

export default RightNavItem;