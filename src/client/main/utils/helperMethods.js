import { WhatsOnYourMindTextAreaPlaceHolder } from './constants';
import { CloudinaryFieldsEnum } from '../../sign/utils/enums';
import axios from 'axios';

export const generateHourString = (createdAt) => {
  return createdAt.substring(createdAt.indexOf('T') + 1, createdAt.indexOf('.'));
};

export const generateDateString = (createdAt) => {
  return createdAt.substring(0, createdAt.indexOf('T'));
};

export const generateCreatePostTextAreaPlaceHolder = (firstName) => {
  return `${WhatsOnYourMindTextAreaPlaceHolder}, ${firstName}?`;
};

export const uploadImageToCloudinary = (file) => {
  const body = new FormData();

  body.append("file", file);
  body.append("upload_preset", CloudinaryFieldsEnum.UploadPreset);

  return axios.post(CloudinaryFieldsEnum.Endpoint, body);
};

export const getItemsArrayFromEnum = (enumObject) => {
  return Object.values(enumObject);
};
