import React from 'react';

import SearchResultsList from './search_results_list';

const SearchFriendsDropdown = ( ) => {
  return(
    <div className = "search-friends-dropdown">
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