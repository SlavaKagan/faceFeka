import React from 'react';

import { Animate } from '../../../../../utils/constants';

const CreatePostOptionItem = ( { onClick, isAnimate, children } ) => {
  return(
    <div
      className = "option-container"
      onClick = { onClick } >
      <div className = { "option" + ( (isAnimate) ? (` ${Animate}`) : ('') ) } >
        { children }
      </div>
    </div>
  );
};

export default CreatePostOptionItem;