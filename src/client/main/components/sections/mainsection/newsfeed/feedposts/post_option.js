import React from 'react';

const PostOption = ( { onClick, children } ) => {
  return(
    <div className = "option-container">
      <div className = "option" onClick = { onClick }>
        { children }
      </div>
    </div>
  );
};

export default PostOption;