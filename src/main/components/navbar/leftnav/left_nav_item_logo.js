import React from 'react';

import { LogoSVG } from '../../svgs/nav_bar_svgs';

const LeftNavItemLogo = ( ) => {
  return(
    <div className = "logo" >
      <a href = { "" } >
        <LogoSVG />
      </a>
    </div>
  );
};

export default LeftNavItemLogo;