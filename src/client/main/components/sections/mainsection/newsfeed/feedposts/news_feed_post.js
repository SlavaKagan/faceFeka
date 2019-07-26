import React, { Component } from 'react';

import PostStat from './post_stat';
import PostOption from './post_option';

import { PrivacyOptionsEnum, PostStatOptionsEnum } from '../../../../../utils/enums';
import { generateDateString, generateHourString, getItemsArrayFromEnum } from '../../../../../utils/helperMethods';

class NewsFeedPost extends Component {
  constructor( props ) {
    super( props );
    const date = new Date();

    this.state = {
      author: {
        id: 1,
        picture: '../../../../../../resources/img/profilepicdemo/profile.jpg',
        name: {
          first: 'Lorem',
          last: 'Ipsum Dolor'
        }
      },

      privacy: PrivacyOptionsEnum.Global,
      time: {
        hour: generateHourString(date),
        date: generateDateString(date)
      },

      body: {
        content: 'Bla Bla Textarea user post',
        attachments: []
      },

      stats: {
        likes: 0,
        comments: 0,
        shares: 0
      }
    };

    this.generatePostStatsItems = this.generatePostStatsItems.bind(this);
  }

  render() {
    return (
      <div className = "user-post">
        <div className = "header-container">
          <div className = "post-header">
            <div className = "left-picture circle">
              <img src = { this.state.author.picture } className = "cover" alt = "author-picture"/>
            </div>

            <div className = "right-details">
              <div className = "author-name">{ this.state.author.name.first } { this.state.author.name.last }</div>

              <div className = "more-details">
                <div className = "privacy-container">
                  <div className = "privacy">
                    <this.state.privacy.svg />
                  </div>
                </div>

                <div className = "date-and-hour">
                  <div className = "hour">{ this.state.time.hour }</div>
                  <div className = "date">{ this.state.time.date }</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className = "post-body">
          <div className = "content-container">
            <div className = "content">{ this.state.body.content }</div>
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
    return this.state.body.attachments.map( (attachment) => {
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