import React, { Component } from 'react';

import TextAreaWithGhostScrollbar from '../../../general_reusable/text_area_with_ghost_scrollbar.js';
import CreatePostOptions from './create_post_options';

import { PrivacyOptionsEnum } from '../../../../enums';

import {
  generateCreatePostTextAreaPlaceHolder,
  generateDateString,
  generateHourString
} from '../../../../helperMethods';

class MainSectionItemCreatePost extends Component {
  constructor( props ) {
    super( props );

    this.state = {
      author: props.loggedInUser,

      privacy: PrivacyOptionsEnum.Global,

      time: {
        hour: null,
        date: null
      },

      body: {
        content: null,
        attachments: []
      },

      isVisibilityMenuOpen: false
    };

    this.updateContent = this.updateContent.bind(this);
    this.updateAttachments = this.updateAttachments.bind(this);
    this.showVisibilityMenuVisible = this.showVisibilityMenuVisible.bind(this);
    this.sharePost = this.sharePost.bind(this);
  };

  render() {
    return (
      <div className = "create-post">
        <div className = "head">
          <div className = "title">
            <span>Create Post</span>
          </div>
        </div>

        <div className = "text">
          <TextAreaWithGhostScrollbar
            placeholder = { generateCreatePostTextAreaPlaceHolder(this.state.author.name.first) }
            value = { this.state.body.content }
            onChange = { this.updateContent } />
        </div>

        <div className = "options">
          <CreatePostOptions
            onClickingAddPhotos = { this.updateAttachments }
            onClickingSharePost = { this.sharePost }
            onClickingVisibilityMenu = { this.showVisibilityMenuVisible }
            isVisibilityMenuOpen = { this.state.isVisibilityMenuOpen } />
        </div>
      </div>
    );
  };

  updateContent(event) {
    this.setState( {
      body: {
        ...this.state.body,
        content: event.target.value
      }
    });
  };

  updateAttachments(event) {
    this.setState( {
      body: {
        ...this.state.body,
        attachments: event.target.files
      }
    });
  };

  showVisibilityMenuVisible(event) {
    // TODO a little buggy, try to fix, only temporary fix, need to know when Global or Private been clicked
    if (event.target.firstChild) {
      this.setState( { isVisibilityMenuOpen: false } );
    } else {
      this.setState( { isVisibilityMenuOpen: true } );
    }
  };

  sharePost() {
    const date = new Date();

    this.setState( {
      time: {
        hour: generateHourString(date),
        date: generateDateString(date)
      },
      stats: {
        likes: 0,
        comments: 0,
        shares: 0
      }
    } );
  };
}

export default MainSectionItemCreatePost;