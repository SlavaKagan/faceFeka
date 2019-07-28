import { WhatsOnYourMindTextAreaPlaceHolder } from './constants';
import { CloudinaryFieldsEnum } from '../utils/enums';
import axiosFetch from './axiosSession';

export const generateHourString = (createdAt) => {
  const fullHour = createdAt.substring(createdAt.indexOf('T') + 1, createdAt.lastIndexOf(':'));
  let hours = (parseInt(fullHour.substring(0, 2)) + 3);
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

  return axiosFetch.post(CloudinaryFieldsEnum.Endpoint, body);
};

export const getItemsArrayFromEnum = (enumObject) => {
  return Object.values(enumObject);
};
