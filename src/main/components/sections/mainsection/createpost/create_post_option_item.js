import React from 'react';

import { Animate } from '../../../../constants';

const CreatePostOptionItem = ( props ) => {
  return(
    <div
      className = "option-container"
      onClick = { props.onClick } >
      <div className = { "option" + ( (props.isAnimate) ? (` ${ Animate }`) : ('') ) } >
        { props.children }
      </div>
    </div>
  );
};

export default CreatePostOptionItem;