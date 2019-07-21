import React from 'react';

import InputWithHoveringLabel from '../../../general_reusable/input_with_hovering_label';
import SubmitInputButton from '../../../general_reusable/submit_input';

import { InputTypesEnum } from '../../../../utils/enums';

const LeftContent = ( { header } ) => {
  const leftContentInputs = [InputTypesEnum.Email, InputTypesEnum.Password];
  const inputItems = leftContentInputs.map( (inputItem) => {
    return(
      <InputWithHoveringLabel
        label =  { inputItem.label }
        type = { inputItem.type } />
    );
  });

  return(
    <div className = "left-content">
      <div className = "content-header">
        <span>{ header }</span>
      </div>

      <div className = "inputs">
        { inputItems }
        <SubmitInputButton />
      </div>
    </div>
  );
};

export default LeftContent;