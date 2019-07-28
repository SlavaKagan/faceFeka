import React from 'react';

import Logo from '../../svgs/logo_svg';

import { LogoHeadlineString } from '../../../../utils/constants';

const HeadlineSection = () => {
  return(
    <div className = "headline">
      <Logo />
      <span>{ LogoHeadlineString }</span>
    </div>
  );
};

export default HeadlineSection;