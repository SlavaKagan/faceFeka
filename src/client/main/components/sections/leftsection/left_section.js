import React from 'react';

import LeftSectionItemProfile from './left_section_item_profile'

const LeftSection = ( { loggedInUser } ) => {
  return(
    <div className = "section left-section">
      <LeftSectionItemProfile
        loggedInUserName = { loggedInUser.name }
        loggedInUserPic = { loggedInUser.profilepic } />
    </div>
  );
};

export default LeftSection;