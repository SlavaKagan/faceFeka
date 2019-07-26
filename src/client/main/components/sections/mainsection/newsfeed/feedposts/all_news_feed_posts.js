import React from 'react';
import axios from 'axios';

import NewsFeedPost from './news_feed_post';
import { APIPostPathsEndpointsEnum } from '../../../../../../../server/utils/enums';

const AllNewsFeedPosts = ( { loggedInUser } ) => {
  const { Posts, SelfPosts, FriendsPosts } = APIPostPathsEndpointsEnum;

  const fetchAllPosts = () => {
    axios.get(`${Posts}/${FriendsPosts}`).then(( { data } ) => {
      console.log(data);
      return data;
    }).catch((error) => {
      console.log(error);
    });
  };

  const postItems = fetchAllPosts().map( (post) => {
    return(
      <NewsFeedPost data = { post } />
    );
  });

  return(
    <div className = "all-posts">
      { postItems }
    </div>
  );
};

export default AllNewsFeedPosts;