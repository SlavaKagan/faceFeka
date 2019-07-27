import React from 'react';
import axios from 'axios';

import SearchResult from './search_result';

import { APIUserPathsEndpointsEnum as UserPaths } from '../../../../server/utils/enums'
import { getFromStorage } from '../../../sign/utils/storageMethods';
import { TokenStorageKey } from '../../../sign/utils/constants';

const SearchResultsList = ( { results } ) => {
  const resultItems = results.map( (result) => {
    return(
      <div className = "result flex">
        <SearchResult
          result = { result }
          onClickAddFriend = { (id) => addFriend(id) } />
      </div>
    );
  });

  const addFriend = (id) => {
    const { token } = getFromStorage(TokenStorageKey);
    axios.patch(`${UserPaths.Users}/${UserPaths.AddFriendship}/${id}`, null, { headers: { "Authorization": `Bearer ${token}` } })
      .then((result) => {
        console.log(result);
      }).catch((error) => {
        console.log(error);
      });
  };

  return(
    <>
      {resultItems}
      {/*<div className="result">*/}
      {/*  <div className="result-pic circle">*/}
      {/*    <img src="resources/img/profilepicdemo/profile.jpg" className="cover"/>*/}
      {/*  </div>*/}

      {/*  <div className="result-name">*/}
      {/*    <span>Lorem Ipsum Dolor</span>*/}
      {/*  </div>*/}

      {/*  <div className="result-add">*/}
      {/*    <div>*/}
      {/*      Add as Friend*/}
      {/*    </div>*/}
      {/*  </div>*/}
      {/*</div>*/}
      {/*<div className="result">*/}
      {/*  <div className="result-pic circle">*/}
      {/*    <img src="resources/img/profilepicdemo/profile.jpg" className="cover"/>*/}
      {/*  </div>*/}

      {/*  <div className="result-name">*/}
      {/*    <span>Dudi</span>*/}
      {/*  </div>*/}

      {/*  <div className="result-add">*/}
      {/*    <div>*/}
      {/*      Add as Friend*/}
      {/*    </div>*/}
      {/*  </div>*/}
      {/*</div>*/}
      {/*<div className="result">*/}
      {/*  <div className="result-pic circle">*/}
      {/*    <img src="resources/img/profilepicdemo/profile.jpg" className="cover"/>*/}
      {/*  </div>*/}

      {/*  <div className="result-name">*/}
      {/*    <span>Avi</span>*/}
      {/*  </div>*/}

      {/*  <div className="result-add">*/}
      {/*    <div>*/}
      {/*      Add as Friend*/}
      {/*    </div>*/}
      {/*  </div>*/}
      {/*</div>*/}
      {/*<div className="result">*/}
      {/*  <div className="result-pic circle">*/}
      {/*    <img src="resources/img/profilepicdemo/profile.jpg" className="cover"/>*/}
      {/*  </div>*/}

      {/*  <div className="result-name">*/}
      {/*    <span>Slava</span>*/}
      {/*  </div>*/}

      {/*  <div className="result-add">*/}
      {/*    <div>*/}
      {/*      Add as Friend*/}
      {/*    </div>*/}
      {/*  </div>*/}
      {/*</div>*/}
    </>
  );
};

export default SearchResultsList;