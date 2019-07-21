import React from 'react';

const LeftSectionItemProfile = ( { loggedInUserName, loggedInUserPic } ) => {
  return(
    <div className = "profile">
      <div className = "profile-picture circle">
        <img src = { loggedInUserPic } alt = "user-profile-picture" className = "cover" />
      </div>

      <div className = "profile-name">
        <span>{ loggedInUserName.first } { loggedInUserName.last }</span>
      </div>
    </div>
  );
};

export default LeftSectionItemProfile;