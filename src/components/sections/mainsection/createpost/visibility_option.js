import React from 'react';

const VisibilityOption = (props) => {
  return(
    <div className = "visibility-option">
      <span>{ props.name }</span>
      <props.svg />
    </div>
  );
};

export default VisibilityOption;