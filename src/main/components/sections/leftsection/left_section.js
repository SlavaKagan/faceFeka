import React from 'react';
import LeftSectionItemProfile from './left_section_item_profile'

const LeftSection = ( props ) => {
  return(
    <div className = "section left-section">
      <LeftSectionItemProfile loggedInUserName = { props.loggedInUserName } loggedInUserPic = { props.loggedInUserPic } />
    </div>
  );
};

export default LeftSection;