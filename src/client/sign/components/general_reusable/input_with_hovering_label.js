import React from 'react';
import { ShortInput } from '../../utils/constants';

const InputWithHoveringLabel = ( { isShortInput, type, label, children } ) => {
  return(
    <label className = { "input-style" + ( ( isShortInput ) ? (` ${ShortInput}`) : ('') ) }>
      <input type = { type } required />
      <span className = "input-style-label" >{ label }</span>
      { children }
    </label>
  );
};

export default InputWithHoveringLabel;