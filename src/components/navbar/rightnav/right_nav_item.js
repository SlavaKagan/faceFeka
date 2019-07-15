import React from 'react';

const RightNavItem = ( props ) => {
  return(
    <div>
      <a href = { props.href }>
        { props.children }
        <span>{ props.name }</span>
      </a>
    </div>
  );
};

export default RightNavItem;