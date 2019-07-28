import React, { Component } from 'react';
import axiosFetch from '../../../../../utils/axiosSession';

import TextAreaWithGhostScrollbar from '../../../general_reusable/text_area_with_ghost_scrollbar.js';
import CreatePostOptions from './create_post_options';
import LoadingSpinner from '../../../general_reusable/loading_spinner';

import { generateCreatePostTextAreaPlaceHolder, uploadImageToCloudinary } from '../../../../../utils/helperMethods';
import { CreatePost } from '../../../../../utils/constants';
import { APIPostPathsEndpointsEnum as PostPaths, } from '../../../../../utils/server_endpoints';
import { PrivacyOptionsEnum } from '../../../../../utils/enums';

class MainSectionItemCreatePost extends Component {
  constructor( props ) {
    super( props );

    this.state = {
      content: '',
      attachments: [],
      isLoading: false,
      privacy: PrivacyOptionsEnum.Global.name,
      isVisibilityMenuOpen: false
    };

    this.updateContent = this.updateContent.bind(this);
    this.toggleVisibilityMenuAndChoosePrivacy = this.toggleVisibilityMenuAndChoosePrivacy.bind(this);
    this.uploadImage = this.uploadImage.bind(this);
    this.zeroizePostState = this.zeroizePostState.bind(this);
    this.sharePost = this.sharePost.bind(this);
  };

  render() {
    const loadingCircleColorBlue = "rgba(28,114,169,0.92)";
    const isLoadingOrPostOptions = this.state.isLoading ?
      <LoadingSpinner circleColor = { loadingCircleColorBlue } /> :
      <CreatePostOptions
        onClickingAddPhotos = { this.uploadImage }
        onClickingSharePost = { this.sharePost }
        onClickingVisibilityMenu = { this.toggleVisibilityMenuAndChoosePrivacy }
        isVisibilityMenuOpen = { this.state.isVisibilityMenuOpen } />;

    return (
      <div className = "create-post">
        <div className = "head">
          <div className = "title">
            <span>{ CreatePost }</span>
          </div>
        </div>

        <div className = "text">
          <TextAreaWithGhostScrollbar
            placeholder = { generateCreatePostTextAreaPlaceHolder(this.props.loggedInUser.name.first) }
            value = { this.state.content }
            onChange = { this.updateContent } />
        </div>

        <div className = "options">
          { isLoadingOrPostOptions }
        </div>
      </div>
    );
  };

  updateContent(event) {
    this.setState( { content: event.target.value });
  };

  uploadImage(event) {
    const files = event.target.files;
    const uploadArr = [];

    for (const file of files) {
      this.setState( { isLoading: true } );
      uploadImageToCloudinary(file).then((result) => {
        console.log(result);
        uploadArr.push(result.data.url);
        this.setState( { isLoading: false } );
        this.setState( { attachments: uploadArr } );
      }).catch((error) => {
        console.log(error);
      });
    }
  }

  toggleVisibilityMenuAndChoosePrivacy(event) {
    if (this.state.isVisibilityMenuOpen) {
      const element = event.target;
      this.setState( { privacy: element.innerText } );
    }
    this.setState( { isVisibilityMenuOpen: !this.state.isVisibilityMenuOpen } );
  };

  zeroizePostState() {
    this.setState({content: '', attachments: [], privacy: PrivacyOptionsEnum.Global.name});
  }

  sharePost() {
    const newPost = {
      content: this.state.content,
      attachments: this.state.attachments,
      privacy: this.state.privacy,
      stats: {
        likes: 0,
        comments: 0
      }
    };

    console.log(newPost);

    axiosFetch.post(PostPaths.Posts, newPost)
      .then((result) => {
        console.log(result);
        this.zeroizePostState();
      }).catch((error) => {
        console.log(error);
      });
  };
}

export default MainSectionItemCreatePost;