import React from 'react';
import axiosFetch from '../../../utils/axiosSession';

import SearchResult from './search_result';

import { APIUserPathsEndpointsEnum as UserPaths } from '../../../utils/server_endpoints';

const SearchResultsList = ( { results } ) => {
  const resultItems = results.map( (result) => {
    return(
      <div className = "result">
        <SearchResult
          result = { result }
          onClickAddFriend = { (id) => addFriend(id) } />
      </div>
    );
  });

  const addFriend = (id) => {
    axiosFetch.patch(`${UserPaths.Users}/${UserPaths.AddFriendship}/${id}`)
      .then((result) => {
        console.log(result);
      }).catch((error) => {
        console.log(error);
      });
  };

  return(
    <>
      {resultItems}
    </>
  );
};

export default SearchResultsList;