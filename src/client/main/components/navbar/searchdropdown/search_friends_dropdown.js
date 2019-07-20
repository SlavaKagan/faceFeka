import React from 'react';

import { Visible } from '../../../constants';
import SearchResultsList from './search_results_list';

const SearchFriendsDropdown = ( { isSearchFriendsVisible } ) => {
  return(
    <div className = { "search-friends-dropdown" + ( (isSearchFriendsVisible) ? (` ${Visible}`) : ('') ) }>
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