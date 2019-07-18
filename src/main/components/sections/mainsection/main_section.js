import React from 'react';
import MainSectionItemCreatePost from './createpost/main_section_item_createpost';
import MainSectionItemNewsFeed from './newsfeed/main_section_item_newsfeed';

const MainSection = ( props ) => {
  return(
    <div className = "section main-section">
      <MainSectionItemCreatePost loggedInUser = { props.loggedInUser } />
      <MainSectionItemNewsFeed />
    </div>
  );
};

export default MainSection;