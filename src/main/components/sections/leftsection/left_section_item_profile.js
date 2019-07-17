import React from 'react';

const LeftSectionItemProfile = ( props ) => {
  return(
    <div className = "profile">
      <div className = "profile-picture circle">
        <img src = { props.loggedInUserPic } alt = "user-profile-picture" />
      </div>

      <div className = "profile-name">
        <span>{ props.loggedInUserName.first } { props.loggedInUserName.last }</span>
      </div>
    </div>
  );
};

export default LeftSectionItemProfile;