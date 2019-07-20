import React, { Component } from 'react';

import LeftContent from './leftcontent/left_content';
import RightContent from './rightcontent/right_content';
import InputWithHoveringLabel from '../../general_reusable/input_with_hovering_label';

import { InputTypesEnum, PasswordVisibilityInputOptionsEnum } from '../../../enums';
import { SignInHeader, SignUpHeader } from '../../../constants';

class ContentSection extends Component {
  constructor(props) {
    super(props);
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