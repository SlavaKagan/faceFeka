import React from 'react';
import InputWithHoveringLabel from '../../../general_reusable/input_with_hovering_label';
import { InputTypesEnum } from '../../../../enums';
import SubmitInputButton from '../../../general_reusable/submit_input';

const RightContent = ( props ) => {
  return(
    <div className = "right-content">
      <div className = "content-header">
        <span>{ props.header }</span>
      </div>

      <div className = "inputs">
        <div className = "inputs-row">
          <InputWithHoveringLabel
            label = { InputTypesEnum.First.label }
            type = { InputTypesEnum.First.type }
            isShortInput = { true }/>
          <InputWithHoveringLabel
            label =  { InputTypesEnum.Last.label }
            type = { InputTypesEnum.Last.type }
            isShortInput = { true } />
        </div>
        <InputWithHoveringLabel
          label =  { InputTypesEnum.Email.label }
          type = { InputTypesEnum.Email.type } />
        <InputWithHoveringLabel
          label =  { InputTypesEnum.Password.label }
          type = { InputTypesEnum.Password.type } />
        <SubmitInputButton />
      </div>
    </div>
  );
};

export default RightContent;