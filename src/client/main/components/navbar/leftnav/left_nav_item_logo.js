import React from 'react';

import { LogoSVG } from '../../svgs/nav_bar_svgs';

const LeftNavItemLogo = ( { href } ) => {
  return(
    <div className = "logo" >
      <a href = { href } >
        <LogoSVG />
      </a>
    </div>
  );
};

export default LeftNavItemLogo;