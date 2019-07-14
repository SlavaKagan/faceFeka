import React from 'react';

import SearchResult from './search_result';

const SearchResultsList = ( {results} ) => {
  // const resultItems = results.map( (result) => {
  //   return(
  //     <div className = "result">
  //       <SearchResult result = {result} />
  //     </div>
  //   );
  // });
  return(
    <div className = "results">
      {/*{resultItems}*/}
      <div className="result">
        <div className="result-pic circle">
          <img src="resources/img/profilepicdemo/profile.jpg" className="cover"/>
        </div>

        <div className="result-name">
          <span>Lorem Ipsum Dolor</span>
        </div>

        <div className="result-add">
          <div>
            Add as Friend
          </div>
        </div>
      </div>
      <div className="result">
        <div className="result-pic circle">
          <img src="resources/img/profilepicdemo/profile.jpg" className="cover"/>
        </div>

        <div className="result-name">
          <span>Dudi</span>
        </div>

        <div className="result-add">
          <div>
            Add as Friend
          </div>
        </div>
      </div>
      <div className="result">
        <div className="result-pic circle">
          <img src="resources/img/profilepicdemo/profile.jpg" className="cover"/>
        </div>

        <div className="result-name">
          <span>Avi</span>
        </div>

        <div className="result-add">
          <div>
            Add as Friend
          </div>
        </div>
      </div>
      <div className="result">
        <div className="result-pic circle">
          <img src="resources/img/profilepicdemo/profile.jpg" className="cover"/>
        </div>

        <div className="result-name">
          <span>Slava</span>
        </div>

        <div className="result-add">
          <div>
            Add as Friend
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchResultsList;