import React, { Component } from 'react';
import axiosFetch from '../../../../../../utils/axiosSession';

import NewsFeedPost from './news_feed_post';
import LoadingSpinner from '../../../../general_reusable/loading_spinner';

import { APIPostPathsEndpointsEnum as PostPaths } from '../../../../../../utils/server_endpoints';

class AllNewsFeedPosts extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoading: true,
      posts: ''
    };
  };

  callPostsAPI() {

    return ;
  };

  fetchAllPosts() {
    let postsArr = [];
    const { Posts, FriendsPosts } = PostPaths;
    axiosFetch.get(`${Posts}/${FriendsPosts}`)
      .then((result) => {
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