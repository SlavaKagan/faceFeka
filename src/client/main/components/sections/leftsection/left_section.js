import React from 'react';

import LeftSectionItemProfile from './left_section_item_profile'

const LeftSection = ( { loggedInUserName, loggedInUserPic } ) => {
  return(
    <div className = "section left-section">
      <LeftSectionItemProfile loggedInUserName = { loggedInUserName } loggedInUserPic = { loggedInUserPic } />
    </div>
  );
};

export default LeftSection;