import React, { Component } from 'react';

import PostStat from './post_stat';
import PostOption from './post_option';

import { PrivacyOptionsEnum, PostStatOptionsEnum } from '../../../../../utils/enums';
import { getItemsArrayFromEnum } from '../../../../../utils/helperMethods';

class NewsFeedPost extends Component {
  constructor( props ) {
    super( props );

    this.state = {
      profilepic: this.props.user.profilepic,
      fullname: this.props.user.name.first + ' ' + this.props.user.name.last,
      privacy: this.props.post.privacy,
      createdAt: this.props.post.createdAt,
      content: this.props.post.content,
      attachments: this.props.post.attachments,
      stats: {
        likes: 0,
        comments: 0,
        shares: 0
      }
    };

    this.generatePostStatsItems = this.generatePostStatsItems.bind(this);
  }

  getPrivacySvg() {
    if (this.state.privacy === PrivacyOptionsEnum.Global.name) {
      // return <PrivacyOptionsEnum.Global.svg />
      return <img src = "../../../../../../../../resources/img/newsfeedpost/privacy-icons/everyone.svg" />
    }
    // return <PrivacyOptionsEnum.Private.svg />
    return <img src = "../../../../../../../../resources/img/newsfeedpost/privacy-icons/onlyme.svg" />
  }

  render() {
    return (
      <div className = "user-post">
        <div className = "header-container">
          <div className = "post-header">
            <div className = "left-picture circle">
              {/*<img src = { this.props.data.profilepic } className = "cover" alt = "author-picture"/>*/}
              <img src = { this.state.profilepic } className = "cover" alt = "author-picture"/>
            </div>

            <div className = "right-details">
              <div className = "author-name">
                { `${this.state.fullname}` }
              </div>

              <div className = "more-details">
                <div className = "privacy-container">
                  <div className = "privacy">
                    { this.getPrivacySvg() }
                  </div>
                </div>

                <div className = "date-and-hour">
                  <div className = "hour">{ this.state.createdAt }</div>
                  <div className = "date">{ this.state.createdAt }</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className = "post-body">
          <div className = "content-container">
            <div className = "content">{ this.state.content }</div>
          </div>
        </div>

        <div className = "post-attachment">
          <div className = "attachment-picture">
            { this.generatePostAttachmentsItems() }
          </div>
        </div>

        <div className = "post-stats">
          { this.generatePostStatsItems() }
        </div>

        <div className = "options">
          <div className = "container">
            { this.generatePostOptionsItems() }
          </div>
        </div>
      </div>
    );
  };

  generatePostAttachmentsItems() {
    return this.state.attachments.map( (attachment) => {
      return(
        <img src = { attachment } alt = "attachment" />
      );
    });
  }

  generatePostStatsItems() {
    return getItemsArrayFromEnum(PostStatOptionsEnum).map( (stat) => {
      return(
        <PostStat
          name = { stat.name }
          amount = { this.state.stats[stat.name.toLowerCase()] } />
      );
    });
  }

  generatePostOptionsItems() {
    return getItemsArrayFromEnum(PostStatOptionsEnum).map( (option) => {
      return(
        <PostOption onClick = { () => {
          const optionName = option.name.toLowerCase();
          const currentStats = { ...this.state.stats };
          currentStats[optionName] = currentStats[optionName] + 1;
          this.setState( { stats: currentStats } ); } } >
          <option.svg />
        </PostOption>
      );
    });
  }
}

export default NewsFeedPost;