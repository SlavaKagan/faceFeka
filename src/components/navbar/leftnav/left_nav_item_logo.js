import React from 'react';

import Logo from '../../svgs/nav_bar_svgs';

const LeftNavItemLogo = ( ) => {
  return(
    <div className = "logo" >
      <a href = { "" } >
        <img src = { Logo } alt = "logo" />
      </a>
    </div>
  );
};

export default LeftNavItemLogo;