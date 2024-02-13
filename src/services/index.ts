import axios from 'axios';
import {baseURL} from '../config';
import {ApiServiceTypes} from '../types/apiServices';

export const configAxios = () => {
  axios.defaults.baseURL = baseURL;
};

export const ApiService: ApiServiceTypes = {
  sendOtp: data =>
    axios.post('/auth/code/send', data).then(response => response.data),
  verifyOtp: data =>
    axios.post('/auth/code/verify', data).then(response => response.data),
  checkUsernameAvailability: data =>
    axios
      .post('/auth/username/availability', data)
      .then(response => response.data),
  createUsername: data =>
    axios.post('/auth/register', data).then(response => response.data),
};
