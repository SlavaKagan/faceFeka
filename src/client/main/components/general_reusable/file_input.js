import React from 'react';

const FileInput = React.forwardRef(( { multiple, onChange } , ref) => {
  return(
    <input
      type = "file"
      multiple = { multiple }
      onChange = { onChange }
      ref = { ref } />
  );
});

export default FileInput;