import React from 'react';

const TextAreaWithGhostScrollbar = ( { placeholder, value, onChange } ) => {
  return(
    <div className = "ghost-scrollbar">
      <textarea
        placeholder = { placeholder }
        value = { value }
        onChange = { onChange } />
      <div className = "cover-scrollbar"/>
    </div>
  );
};

export default TextAreaWithGhostScrollbar;