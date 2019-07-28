import React from 'react';
import axiosFetch from '../../../../utils/axiosSession';

import RightNavItem from './right_nav_item';

import { RightNavBarPagesEnum } from '../../../../utils/enums';
import { APIUserPathsEndpointsEnum as UserPaths } from '../../../../utils/server_endpoints';
import { removeFromStorage } from '../../../../utils/storageMethods';
import { TokenStorageKey } from '../../../../utils/constants';

const RightNav = () => {
  const logout = () => {
    axiosFetch.post(`${UserPaths.Users}/${UserPaths.Logout}`)
      .then(( result ) => {
      console.log(result);
      removeFromStorage(TokenStorageKey);
      window.location = '/sign.html';
    }).catch((error) => {
      console.log(error.response);
    });
  };

  return(
    <div className = "rightnav">
      <RightNavItem
        name = { RightNavBarPagesEnum.Home.name }
        href = { RightNavBarPagesEnum.Home.href } >
        <RightNavBarPagesEnum.Home.svg />
      </RightNavItem>

      <RightNavItem
        name = { RightNavBarPagesEnum.Profile.name }
        href = { RightNavBarPagesEnum.Profile.href }
        blank = { true } >
        <RightNavBarPagesEnum.Profile.svg />
      </RightNavItem>

      <RightNavItem
        name = { RightNavBarPagesEnum.Friends.name }
        href = { RightNavBarPagesEnum.Friends.href } >
        <RightNavBarPagesEnum.Friends.svg />
      </RightNavItem>

      <RightNavItem
        name = { RightNavBarPagesEnum.Logout.name }
        onClick = { logout } >
        <RightNavBarPagesEnum.Logout.svg />
      </RightNavItem>
    </div>
  );
};

export default RightNav;