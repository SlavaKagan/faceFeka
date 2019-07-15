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
      }
    };

    this.updateContent = this.updateContent.bind(this);
    this.updateAttachments = this.updateAttachments.bind(this);
    this.sharePost = this.sharePost.bind(this);
  };

  render() {
    return (
      <div className="create-post">
        <div className="head">
          <div className="title">
            <span>Create Post</span>
          </div>
        </div>

        <div className="text">
          <TextAreaWithGhostScrollbar
            placeholder = { generateCreatePostTextAreaPlaceHolder(this.state.author.name.first) }
            value = { this.state.body.content }
            onChange = { this.updateContent } />
        </div>

        <div className="options">
          <CreatePostOptions
            onClickingAddPhotos = { this.updateAttachments }
            onClickingSharePost = { this.sharePost }
            onClickingVisibility = { this.showVisibilityOptionsDiv } />
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
    } );
  };

  updateAttachments(event) {
    this.setState( {
      body: {
        ...this.state.body,
        attachments: event.target.files
      }
    } );
  };

  showVisibilityOptionsDiv() {

  };

  updateVisibility(event) {
    this.setState( {
      // privacy: PrivacyOptionsEnum.
    } );
  };

  sharePost() {
    const date = new Date();

    this.setState({
      time: {
        hour: generateHourString(date),
        date: generateDateString(date)
      },
    } );
  };
}

export default MainSectionItemCreatePost;