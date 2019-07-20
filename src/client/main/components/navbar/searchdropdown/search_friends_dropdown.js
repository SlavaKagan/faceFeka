import React from 'react';

import SearchResultsList from './search_results_list';
import { Visible } from '../../../constants';

const SearchFriendsDropdown = ( props ) => {
  return(
    <div className = { "search-friends-dropdown" + ( (props.isSearchFriendsVisible) ? (` ${Visible}`) : ('') ) }>
      <div className = "x-button-container">
        <div className = "x-button">
          <span>X</span>
        </div>
      </div>

      <SearchResultsList />
    </div>
  );
};

export default SearchFriendsDropdown;