import { Hidden, Visible } from '../components/svgs/show_hide_password_svgs';

export const PasswordVisibilityInputOptionsEnum = {
  Hidden: {
    inputType: "password",
    svg: Hidden
  },
  Visible: {
    inputType: "text",
    svg: Visible
  }
};

export const InputTypesEnum = {
  First: {
    type: 'text',
    name: 'first',
    label: 'First Name'
  },
  Last: {
    type: 'text',
    name: 'last',
    label: 'Last Name'
  },
  Email: {
    type: 'text',
    name: 'email',
    label: 'Email Address'
  },
  Password: {
    type: 'password',
    name: 'password',
    label: 'Password'
  }
};

export const CloudinaryFieldsEnum = {
  Endpoint: 'https://api.cloudinary.com/v1_1/yossisaadi/image/upload',
  UploadPreset: 'cldnry_facefeka'
};