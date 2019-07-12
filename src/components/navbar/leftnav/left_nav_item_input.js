import React, { Component } from 'react';
import SearchSVG from '../../../../resources/img/navbar/search.svg';
import searchBarPlaceholder from '../../../../constants';

class LeftNavItemInput extends Component {
  constructor(props) {
    super(props);

    this.state = {
      content: ''
    };
  }

  render() {
    <div className="search-bar-container">
      <div className="search-bar">
        <SearchSVG />
        <input
          type="text"
          placeholder={ searchBarPlaceholder }
          onChange={this.onContentChange} />
      </div>
    </div>
  }

  onContentChange(event) {
    this.setState({
      term: event.target.value
    });
  };
}

export default LeftNavItemInput;