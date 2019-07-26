import React, { Component } from 'react';
import axios from 'axios';

import InputWithHoveringLabel from '../../../general_reusable/input_with_hovering_label';
import SubmitInputButton from '../../../general_reusable/submit_input';
import LoadingSpinner from '../../../../../main/components/general_reusable/loading_spinner';
import FileInput from '../../../../../main/components/general_reusable/file_input';

import { CloudinaryFieldsEnum, InputTypesEnum } from '../../../../utils/enums';
import { APIUserPathsEndpointsEnum as UserPaths } from '../../../../../../server/utils/enums';
import { setInStorage } from '../../../../utils/storageMethods';
import { TokenStorageKey } from '../../../../utils/constants';

class RightContent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: false,
      formdata: null,
      profilepic: null
    };

    this.shortRightContentInputs = [ InputTypesEnum.First, InputTypesEnum.Last ];
    this.longRightContentInputs = [ InputTypesEnum.Email, InputTypesEnum.Password ];

    this.fileInput = React.createRef();

    this.clickOnFileUpload = this.clickOnFileUpload.bind(this);
    this.uploadImage = this.uploadImage.bind(this);
    this.createUser = this.createUser.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  clickOnFileUpload() {
    this.fileInput.current.click();
  };

  async handleSubmit(event) {
    event.preventDefault();
    const { first, last, email, password } = event.target;
    this.setState({
      formdata: {
        name: {
          first: first.value,
          last: last.value
        },
        email: email.value,
        password: password.value
      }
    }, this.createUser);

    if (!this.state.profilepic) {
      alert('Please upload a profile pic');
    }
  }

  createUser() {
    const newUser = {
      ...this.state.formdata,
      profilepic: this.state.profilepic
    };

    this.setState( { loading: true } );

    axios.post(UserPaths.Users, newUser).then((result) => {
      console.log(result);
      this.setState( { loading: false } );
      setInStorage(TokenStorageKey, { token: result.data.token });
    }).catch((error) => {
      console.log(error.response);
    });
  }

  uploadImage(event) {
    const files = event.target.files;
    const body = new FormData();

    body.append("file", files[0]);
    body.append("upload_preset", CloudinaryFieldsEnum.UploadPreset);

    this.setState( { loading: true } );

    axios.post(CloudinaryFieldsEnum.Endpoint, body).then((result) => {
      console.log(result);
      this.setState( { profilepic: result.data.url } );
      this.setState( { loading: false } );
    }).catch((error) => {
      console.log(error);
    });
  }

  render() {
    const { header } = this.props;
    const loadingCircleColorBlue = "rgba(0, 165, 169, 0.92)";

    const isLoadingOrSubmitButton = this.state.loading ?
      <LoadingSpinner circleColor = { loadingCircleColorBlue } /> :
      <SubmitInputButton />;

    const shortInputItems = this.shortRightContentInputs.map((inputItem) => {
      return (
        <InputWithHoveringLabel
          label = { inputItem.label }
          type = { inputItem.type }
          name = { inputItem.name }
          isShortInput = { true }/>
      );
    });

    const longInputItems = this.longRightContentInputs.map((inputItem) => {
      return (
        <InputWithHoveringLabel
          label = { inputItem.label }
          type = { inputItem.type }
          name = { inputItem.name } />
      );
    });

    return (
      <div className = "right-content">
        <div className = "content-header">
          <span>{ header }</span>
        </div>

        <form onSubmit = { this.handleSubmit } className = "inputs">
          <div className = "inputs-row">
            { shortInputItems }
          </div>

          { longInputItems }

          <FileInput
            multiple = "multiple"
            onChange = { this.uploadImage }
            ref = { this.fileInput } />

          <input
            type = "button"
            onClick = { this.clickOnFileUpload }
            value = "Choose Profile Image"
            className = "upload-button"
            required />

          <div className = "submit-div">
            { isLoadingOrSubmitButton }
          </div>

        </form>
      </div>
    );
  }
}

export default RightContent;