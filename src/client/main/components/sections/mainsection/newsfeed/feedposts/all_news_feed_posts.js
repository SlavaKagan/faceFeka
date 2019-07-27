import React, { Component } from 'react';
import axios from 'axios';

import NewsFeedPost from './news_feed_post';
import { APIPostPathsEndpointsEnum } from '../../../../../../../server/utils/enums';
import { getFromStorage } from '../../../../../../sign/utils/storageMethods';
import { TokenStorageKey } from '../../../../../../sign/utils/constants';

class AllNewsFeedPosts extends Component {
  constructor(props) {
    super(props);

    this.state = {
      posts: ''
    };
  }

  fetchAllPosts() {
    const { Posts, FriendsPosts } = APIPostPathsEndpointsEnum;
    const { token } = getFromStorage(TokenStorageKey);
    return axios.get(`${ Posts }/${ FriendsPosts }`, { headers: { "Authorization": `Bearer ${ token }` } });
  };

  getPosts() {
    let postsArr = [];
    this.fetchAllPosts().then((result) => {
      const data = result.data;
      for (const dataItem of data) {
        const { user, posts } = dataItem;
        posts.forEach((post) => {
          postsArr.push( { user, post } );
        });
      }
      this.setState({posts: postsArr}, () => console.log(this.state));
      return postsArr;
    }).catch((error) => {
      console.log(error);
    });
  };

  componentWillMount() {
    this.getPosts();
  }

  getAllPosts() {
    const posts = this.state.posts;
    return posts.map( ({ user, post }) => {
      return <NewsFeedPost user = {user} post = {post} />
    });
  }

  render() {
    // let posts = '';
    // console.log(this.state.posts);
    // if (this.state.posts) {
    //   posts = this.state.posts.map( ({ user, post }) => {
    //     console.log(user, post);
    //     return <NewsFeedPost user = {user} post = {post}/>
    //   });
    // }
    return (
      <div className="all-posts">
        { this.getAllPosts }
      </div>
    );
  }
}

export default AllNewsFeedPosts;