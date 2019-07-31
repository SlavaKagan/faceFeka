import React from 'react';

const SearchResult = ( { result, onClickAddFriend } ) => {
  return(
    <>
      <div className = "result-pic circle">
        <img src = { result.profilepic } className = "cover" alt = "profile pic"/>
      </div>

      <div className = "result-name">
        <span>{ `${result.name.first} ${result.name.last}` }</span>
      </div>

      <div className = "result-add" onClick = { () => onClickAddFriend(result._id) } >
        <span>Add Friend</span>
      </div>
    </>
  );
};

export default SearchResult;