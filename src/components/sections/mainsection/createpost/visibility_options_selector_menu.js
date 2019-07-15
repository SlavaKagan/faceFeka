import React, { Component } from 'react';

import VisibilityOption from './visibility_option';

import { PrivacyOptionsEnum } from '../../../../enums';

class VisibilityOptionsSelectorMenu extends Component {

  constructor(props) {
    super(props);

    this.state = {
      visible: false,
      selected: PrivacyOptionsEnum.Global
    };

    this.globalRef = React.createRef();
    this.privateRef = React.createRef();

    this.highlightSelected = this.highlightSelected.bind(this);
  }

  render() {
    return (
      <div className = "visibility-container visible">
        <div className = "dropdown">
          <VisibilityOption name = { PrivacyOptionsEnum.Global.name } svg = { PrivacyOptionsEnum.Global.svg } ref = { this.globalRef } />
          <VisibilityOption name = { PrivacyOptionsEnum.Private.name } svg = { PrivacyOptionsEnum.Private.svg } ref = { this.privateRef } />
        </div>
      </div>
    );
  };

  highlightSelected() {

  }
}

export default VisibilityOptionsSelectorMenu;