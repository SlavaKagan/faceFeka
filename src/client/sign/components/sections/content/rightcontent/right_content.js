import React from 'react';

import InputWithHoveringLabel from '../../../general_reusable/input_with_hovering_label';
import SubmitInputButton from '../../../general_reusable/submit_input';

import { InputTypesEnum } from '../../../../utils/enums';

const RightContent = ( { header } ) => {
  const shortRightContentInputs = [InputTypesEnum.First, InputTypesEnum.Last];
  const shortInputItems = shortRightContentInputs.map( (inputItem) => {
    return(
      <InputWithHoveringLabel
        label = { inputItem.label }
        type = { inputItem.type }
        isShortInput = { true } />
    );
  });

  const longRightContentInputs = [InputTypesEnum.Email, InputTypesEnum.Password];
  const longInputItems = longRightContentInputs.map( (inputItem) => {
    return(
      <InputWithHoveringLabel
        label = { inputItem.label }
        type = { inputItem.type } />
    );
  });

  return(
    <div className = "right-content">
      <div className = "content-header">
        <span>{ header }</span>
      </div>

      <div className = "inputs">
        <div className = "inputs-row">
          { shortInputItems }
        </div>
        { longInputItems }
        <SubmitInputButton />
      </div>
    </div>
  );
};

export default RightContent;