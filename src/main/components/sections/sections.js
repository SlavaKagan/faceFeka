import React from 'react';

import LeftSection from './leftsection/left_section';
import MainSection from './mainsection/main_section';

const Sections = ( props ) => {
  return(
    <div className = "sections-container">
      <LeftSection
        loggedInUserName = { props.loggedInUser.name }
        loggedInUserPic = { props.loggedInUser.picture } />
      <MainSection loggedInUser = { props.loggedInUser } />
    </div>
  );
};

export default Sections;