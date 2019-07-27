import React from 'react';
import axios from 'axios';

import RightNavItem from './right_nav_item';

import { RightNavBarPagesEnum } from '../../../utils/enums';
import { APIUserPathsEndpointsEnum as UserPaths } from '../../../../../server/utils/enums';
import { getFromStorage, removeFromStorage } from '../../../../sign/utils/storageMethods';
import { TokenStorageKey } from '../../../../sign/utils/constants';

const RightNav = () => {
  const logout = () => {
    const { token } = getFromStorage(TokenStorageKey);
    axios.post(`${UserPaths.Users}/${UserPaths.Logout}`, null, { headers: { "Authorization": `Bearer ${token}` } })
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
        href = { RightNavBarPagesEnum.Profile.href } >
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