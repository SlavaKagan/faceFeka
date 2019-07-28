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