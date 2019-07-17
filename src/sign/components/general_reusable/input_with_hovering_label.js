import React from 'react';
import { ShortInput } from '../../constants';

const InputWithHoveringLabel = ( props ) => {
  return(
    <label className = { "input-style" + ( ( props.isShortInput ) ? (` ${ ShortInput }`) : ('') ) }>
      <input type = { props.type } required />
      <span className = "input-style-label" >{ props.label }</span>
      { props.children }
    </label>
  );
};

export default InputWithHoveringLabel;