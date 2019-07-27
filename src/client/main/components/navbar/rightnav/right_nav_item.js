import React from 'react';

const RightNavItem = ( { href, name, children, onClick } ) => {
  return(
    <div>
      <a href = { href } onClick = { onClick } >
        { children }
        <span>{ name }</span>
      </a>
    </div>
  );
};

export default RightNavItem;