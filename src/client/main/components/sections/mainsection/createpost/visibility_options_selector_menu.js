import React, { Component } from 'react';

import VisibilityOption from './visibility_option';

import { PrivacyOptionsEnum } from '../../../../../utils/enums';
import { getItemsArrayFromEnum } from '../../../../../utils/helperMethods';
import { Visible } from '../../../../../utils/constants';

class VisibilityOptionsSelectorMenu extends Component {

  constructor( props ) {
    super( props );

    this.state = {
      selected: PrivacyOptionsEnum.Global
    };

    this.getSelectedFromClick = this.getSelectedFromClick.bind(this);
  };

  render() {
    return (
      <div
        className = { "visibility-container" + ( (this.props.isVisibilityMenuOpen) ? (` ${Visible}`) : ('') ) } >
        <div className = "dropdown">
          { this.generateVisibilityOptionsItems() }
        </div>
      </div>
    );
  };

  generateVisibilityOptionsItems() {
    return getItemsArrayFromEnum(PrivacyOptionsEnum).map( (option) => {
      return(
        <VisibilityOption
          name = { option.name }
          svg = { option.svg }
          onClickGetSelected = { this.getSelectedFromClick }
          isSelected = { option.name === this.state.selected.name } />
      );
    });
  };

  getSelectedFromClick(event) {
    const clicked = event.currentTarget.querySelector('span').textContent;
    for (let option of Object.values(PrivacyOptionsEnum)) {
      if (clicked !== this.state.selected && clicked === option.name) {
        this.setState( { selected: option } );
      }
    }
  };
}

export default VisibilityOptionsSelectorMenu;