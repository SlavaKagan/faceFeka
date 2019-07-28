import React, { Component } from 'react';
import axiosFetch from '../../../../../utils/axiosSession';

import InputWithHoveringLabel from '../../../general_reusable/input_with_hovering_label';
import SubmitInputButton from '../../../general_reusable/submit_input';

import { InputTypesEnum } from '../../../../../utils/enums';
import { setInStorage } from '../../../../../utils/storageMethods';
import { APIUserPathsEndpointsEnum as UserPaths } from '../../../../../utils/server_endpoints';
import { TokenStorageKey } from '../../../../../utils/constants';

class LeftContent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoggedIn: false,
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
    axiosFetch.post(`${UserPaths.Users}/${UserPaths.Login}`, this.state.formdata)
      .then((result) => {
        console.log(result);
        setInStorage(TokenStorageKey, { token: result.data.token });
        this.setState( { isLoggedIn: true } );
        window.location = '/';
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

    // if (this.state.isLoggedIn) {
    //   return <Redirect to = "dsa" />
    // }

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