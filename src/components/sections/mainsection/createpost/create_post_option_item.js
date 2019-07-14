import React from 'react';

const CreatePostOptionItem = ( props ) => {
  return(
    <div
      className = "option-container"
      onClick = { props.onClick } >
      <div className = { "option" + ((props.additionalClass) ? (" " + props.additionalClass) : ('')) } >
        {props.children}
      </div>
    </div>
  );
};

export default CreatePostOptionItem;