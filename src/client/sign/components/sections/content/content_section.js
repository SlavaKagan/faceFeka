import React, { Component } from 'react';

import LeftContent from './leftcontent/left_content';
import RightContent from './rightcontent/right_content';

import {
  SignInHeader,
  SignUpHeader
} from '../../../../utils/constants';

class ContentSection extends Component {
  constructor( props ) {
    super( props );
  }

  render() {
    return (
      <div className = "boundaries">
        <div className = "content-container">
          <div className = "content">
            <LeftContent header = { SignInHeader } />
            <hr />
            <RightContent header = { SignUpHeader } />
          </div>
        </div>
      </div>
    );
  }
}

export default ContentSection;