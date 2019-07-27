import React, { Component } from 'react';
import axios from 'axios';

import NewsFeedPost from './news_feed_post';
import { APIPostPathsEndpointsEnum } from '../../../../../../../server/utils/enums';
import { getFromStorage } from '../../../../../../sign/utils/storageMethods';
import { TokenStorageKey } from '../../../../../../sign/utils/constants';
import LoadingSpinner from '../../../../general_reusable/loading_spinner';

class AllNewsFeedPosts extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoading: true,
      posts: ''
    };
  };

  callPostsAPI() {
    const { Posts, FriendsPosts } = APIPostPathsEndpointsEnum;
    const { token } = getFromStorage(TokenStorageKey);
    return axios.get(`${Posts}/${FriendsPosts}`, { headers: { "Authorization": `Bearer ${ token }` } });
  };

  fetchAllPosts() {
    let postsArr = [];
    this.callPostsAPI().then((result) => {
      const data = result.data;

      for (const dataItem of data) {
        const { user, posts } = dataItem;
        posts.forEach((post) => {
          postsArr.push( { user, post } );
        });
      }

      this.setState( { posts: postsArr }, this.setState( { isLoading: false } ) );
    }).catch((error) => {
      console.log(error);
    });
  };

  componentWillMount() {
    this.fetchAllPosts();
  }

  getAllPosts() {
    if (this.state.posts) {
      return this.state.posts.map(({ user, post }) => {
        return <NewsFeedPost user = { user } post = { post }/>
      });
    }
  }

  render() {
    const loadingCircleColorBlue = "rgba(28,114,169,0.92)";
    const isLoadingOrPosts = this.state.isLoading ?
      <LoadingSpinner circleColor = { loadingCircleColorBlue } /> :
      this.getAllPosts();

    return (
      <div className = "all-posts">
        { isLoadingOrPosts }
      </div>
    );
  }
}

export default AllNewsFeedPosts;