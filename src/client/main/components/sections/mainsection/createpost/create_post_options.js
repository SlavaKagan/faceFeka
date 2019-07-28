import React, { Component } from 'react';

import ToolTip from '../../../general_reusable/tool_tip';
import CreatePostOptionItem from './create_post_option_item';

import FileInput from '../../../general_reusable/file_input';
import VisibilityOptionsSelectorMenu from './visibility_options_selector_menu';

import { NewPostOptionsEnum } from '../../../../../utils/enums';

class CreatePostOptions extends Component {
  constructor( props ) {
    super( props );

    this.fileInput = React.createRef();
    this.clickOnFileUpload = this.clickOnFileUpload.bind(this);
  };

  render() {
    const { onClickingAddPhotos, onClickingSharePost, onClickingVisibilityMenu, isVisibilityMenuOpen } = this.props;
    return (
      <div className="container">
        <CreatePostOptionItem onClick = { this.clickOnFileUpload } >
          <NewPostOptionsEnum.AddPhotos.svg />
          <ToolTip text = { NewPostOptionsEnum.AddPhotos.tooltip } />
          <FileInput
            multiple = "multiple"
            onChange = { onClickingAddPhotos }
            ref = { this.fileInput } />
        </CreatePostOptionItem>

        <CreatePostOptionItem
            onClick = { onClickingSharePost }
            isAnimate = { true } >
          <NewPostOptionsEnum.SharePost.svg />
          <ToolTip text = { NewPostOptionsEnum.SharePost.tooltip }/>
          <label>{ NewPostOptionsEnum.SharePost.label }</label>
        </CreatePostOptionItem>

        <CreatePostOptionItem onClick = { onClickingVisibilityMenu } >
          <NewPostOptionsEnum.VisibleTo.svg />
          <ToolTip text = { NewPostOptionsEnum.VisibleTo.tooltip } />
          <VisibilityOptionsSelectorMenu isVisibilityMenuOpen = { isVisibilityMenuOpen } />
        </CreatePostOptionItem>
      </div>
    );
  };

  clickOnFileUpload() {
    this.fileInput.current.click();
  };

}

export default CreatePostOptions;