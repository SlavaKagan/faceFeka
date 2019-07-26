import React, { Component } from 'react';
import axios from 'axios';

import InputWithHoveringLabel from '../../../general_reusable/input_with_hovering_label';
import SubmitInputButton from '../../../general_reusable/submit_input';
import LoadingSpinner from '../../../../../main/components/general_reusable/loading_spinner';

import { InputTypesEnum } from '../../../../utils/enums';
import { APIUserPathsEndpointsEnum as UserPaths } from '../../../../../../server/utils/enums';

class LeftContent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: false,
      formdata: null
    };

    this.leftContentInputs = [ InputTypesEnum.Email, InputTypesEnum.Password ];
    this.handleSubmit = this.handleSubmit.bind(this);
    this.loginUser = this.loginUser.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    const { email, password } = event.target;
    this.setState({
      formdata: {
        email: email.value,
        password: password.value
      }
    }, this.loginUser);
  }

  loginUser() {
    const user = {
      ...this.state.formdata
    };

    axios.post(`${UserPaths.Users}/${UserPaths.Login}`, this.state.formdata).then((result) => {
      console.log(result);
    }).catch((error) => {
      if (!error.response) {
        console.log(error);
      } else {
        console.log(error.response);
      }
    });
  }

  render() {
    const { header } = this.props;
    const loadingCircleColorBlue = "rgba(0, 165, 169, 0.92)";

    const isLoadingOrSubmitButton = this.state.loading ?
      <LoadingSpinner circleColor = { loadingCircleColorBlue } /> :
      <SubmitInputButton />;

    const inputItems = this.leftContentInputs.map((inputItem) => {
      return (
        <InputWithHoveringLabel
          label = { inputItem.label }
          type = { inputItem.type }
          name = { inputItem.name } />
      );
    });

    return (
      <div className = "left-content">
        <div className = "content-header">
          <span>{ header }</span>
        </div>

        <form onSubmit = { this.handleSubmit } className = "inputs">
          { inputItems }
          <div className = "submit-div">
            <SubmitInputButton />
          </div>
        </form>

        {/*<div className = "footer">*/}
        {/*  Still don't have an account?*/}
        {/*</div>*/}
      </div>
    );
  }
}

export default LeftContent;