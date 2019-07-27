import React from 'react';

import MainSectionItemNewsFeed from './newsfeed/main_section_item_newsfeed';
import MainSectionItemCreatePost from './createpost/main_section_item_createpost';

const MainSection = ( { loggedInUser } ) => {
  return(
    <div className = "section main-section">
      <MainSectionItemCreatePost loggedInUser = { loggedInUser } />
      <MainSectionItemNewsFeed />
    </div>
  );
};

export default MainSection;