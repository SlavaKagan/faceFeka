import React from 'react';

const PostOption = ( props ) => {
  return(
    <div className = "option-container">
      <div className = "option" onClick = { props.onClick }>
        { props.children }
      </div>
    </div>
  );
};

export default PostOption;