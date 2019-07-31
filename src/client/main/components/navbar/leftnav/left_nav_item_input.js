import React, { Component } from 'react';

import { SearchSVG } from '../../svgs/nav_bar_svgs';

import { SearchBarPlaceholder } from '../../../../utils/constants';

class LeftNavItemInput extends Component {
  constructor( props ) {
    super( props );
  }

  render() {
    return(
      <div className = "search-bar-container">
        <div className = "search-bar">
          <SearchSVG />
          <input
            type = "text"
            placeholder = { SearchBarPlaceholder }
            onChange = { this.props.onChangeSearchBar }
            onClick = { this.props.OnClickingSearchBar } />
        </div>
      </div>
    );
  };
}

export default LeftNavItemInput;