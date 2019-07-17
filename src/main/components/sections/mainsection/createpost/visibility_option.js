import React from 'react';

import { Selected } from '../../../../constants';

const VisibilityOption = ( props ) => {
  return(
    <div
      className = { "visibility-option" + ( (props.isSelected) ? (` ${Selected}`) : ('') ) }
      onClick = { props.onClickGetSelected } >
      <span>{ props.name }</span>
      <props.svg />
    </div>
  );
};

export default VisibilityOption;