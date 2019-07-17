import React from 'react';

const FileInput = React.forwardRef((props, ref) => {
  return(
    <input
      type = "file"
      style = { {display: 'none'} }
      multiple = { props.multiple }
      onChange = { props.onChange }
      ref = { ref } />
  );
});

export default FileInput;