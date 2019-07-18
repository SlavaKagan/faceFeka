import React from 'react';
import InputWithHoveringLabel from '../../../general_reusable/input_with_hovering_label';
import { InputTypesEnum } from '../../../../enums';
import SubmitInputButton from '../../../general_reusable/submit_input';

const LeftContent = ( props ) => {
  return(
    <div className = "left-content">
      <div className = "content-header">
        <span>{ props.header }</span>
      </div>

      <div className = "inputs">
        <InputWithHoveringLabel label =  { InputTypesEnum.Email.label } type = { InputTypesEnum.Email.type } />
        <InputWithHoveringLabel label =  { InputTypesEnum.Password.label } type = { InputTypesEnum.Password.type } />
        <SubmitInputButton />
      </div>
    </div>
  );
};

export default LeftContent;