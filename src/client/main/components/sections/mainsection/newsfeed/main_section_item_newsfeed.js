import React from 'react';

import AllNewsFeedPosts from './feedposts/all_news_feed_posts';

const MainSectionItemNewsFeed = ( { loggedInUser } ) => {
  return(
    <div className = "news-feed">
      <AllNewsFeedPosts loggedInUser = { loggedInUser } />
    </div>
  );
};

export default MainSectionItemNewsFeed;