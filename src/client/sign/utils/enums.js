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
    type: "text",
    label: "First Name"
  },
  Last: {
    type: "text",
    label: "Last Name"
  },
  Email: {
    type: "text",
    label: "Email Address"
  },
  Password: {
    type: "password",
    label: "Password"
  }
};