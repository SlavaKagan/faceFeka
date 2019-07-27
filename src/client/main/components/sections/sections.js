import React from 'react';

import LeftSection from './leftsection/left_section';
import MainSection from './mainsection/main_section';

const Sections = ( { loggedInUser } ) => {
  return(
    <div className = "sections-container">
      <LeftSection loggedInUser = { loggedInUser }/>
      <MainSection loggedInUser = { loggedInUser } />
    </div>
  );
};

export default Sections;