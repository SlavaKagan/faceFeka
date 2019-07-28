import React from 'react';

import { Selected } from '../../../../../utils/constants';

const VisibilityOption = ( props ) => {
  const { isSelected, onClickGetSelected, name } = props;
  return(
    <div
      className = { "visibility-option" + ( (isSelected) ? (` ${Selected}`) : ('') ) }
      onClick = { onClickGetSelected } >
      <span>{ name }</span>
      <props.svg />
    </div>
  );
};

export default VisibilityOption;