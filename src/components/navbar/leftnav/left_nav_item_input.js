import React, { Component } from 'react';

import { SearchSVG } from '../../svgs/nav_bar_svgs';

import { SearchBarPlaceholder } from '../../../constants';

class LeftNavItemInput extends Component {
  constructor( props ) {
    super( props );

    this.state = {
      content: null
    };

    this.onContentChange = this.onContentChange.bind(this);
    // this.searchAndFilter = this.searchAndFilter.bind(this);
  }

  render() {
    return(
      <div className = "search-bar-container">
        <div className = "search-bar">
          <SearchSVG />
          <input
            type = "text"
            placeholder = { SearchBarPlaceholder }
            onChange = { this.onContentChange } />
        </div>
      </div>
    );
  };

  onContentChange(event) {
    this.setState({
      content: event.target.value
    });
    // this.searchAndFilter();
  };

  /*searchAndFilter() {
    const input = this.state.content;
    const filter = input.toLowerCase();
    const allRegisters = this.props.registers;
    let isResultsFound = false;

    const showOrHideDropdown = (filter, isResultsFound) => {
      if (!filter || !isResultsFound) {
        // remove visible class
      } else {
        // add visible class
      }
    };

    allRegisters.forEach( (friend) => {
      const name = friend.name;

      if (name) {
        if (!filter) {
          // parent element of friend => style.display = 'none'
        } else if (filter === '*' || name.toLowerCase().indexOf(filter) > -1) {
          // parent element of friend => style.display = 'flex'
          isResultsFound = true;
        }
      }
    });
  }*/
}

export default LeftNavItemInput;