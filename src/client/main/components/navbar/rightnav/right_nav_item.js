import React from 'react';

const RightNavItem = ( { href, name, children, onClick, blank } ) => {
  return(
    <div>
      <a href = { href } onClick = { onClick } target = { blank ? "_blank": "" }>
        { children }
        <span>{ name }</span>
      </a>
    </div>
  );
};

export default RightNavItem;