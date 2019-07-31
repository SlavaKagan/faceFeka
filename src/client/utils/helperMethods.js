import { WhatsOnYourMindTextAreaPlaceHolder } from './constants';
import { CloudinaryFieldsEnum } from '../utils/enums';
import axios from 'axios';

export const generateHourString = (createdAt) => {
  //
  const LocalTimeUTCPlusThree = 3;
  const fullHour = createdAt.substring(createdAt.indexOf('T') + 1, createdAt.lastIndexOf(':'));
  let hours = (parseInt(fullHour.substring(0, 2)) + LocalTimeUTCPlusThree);
  hours = hours < 10 ? `0${hours}` : hours;
  const minutes = fullHour.substring(2);

  return hours + minutes;
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
