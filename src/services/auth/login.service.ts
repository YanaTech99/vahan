import {APIRootService} from '../api/api-root.service';
import {endPoint} from '../../config/endPoint';
import { ConsoleLogger } from '../logger.service';

/**
 *@file login.service.ts
 *@description login service
 */
export class LoginService {
  public static sendOTP = (formData: any) => {
    const apiInstance = APIRootService.getAxiosInstance();
    return apiInstance
      .post(`${endPoint.sendOtp}`, formData)
      .then(({data}) => data);
  };
  public static verifyOTP = (formData: any) => {
    const apiInstance = APIRootService.getAxiosInstance();
    return apiInstance
      .post(`${endPoint.verifyOtp}`, formData)
      .then(({data}) => data);
  };
  public static checkUsernameAvailability = (formData: any) => {
    const apiInstance = APIRootService.getAxiosInstance();
    return apiInstance
      .post(`${endPoint.checkAvailability}`, formData)
      .then(({data}) => data);
  };
  public static createUsername = (formData: any) => {
    const apiInstance = APIRootService.getAxiosInstance();
    return apiInstance
      .post(`${endPoint.register}`, formData)
      .then(({data}) => data);
  };
  public static getProfile = () => {
    const apiInstance = APIRootService.getAxiosInstance();
    return apiInstance.get(`${endPoint.getProfile}`).then(({data}) => data);
  };
  public static updateProfile = (formData: any) => {
    const apiInstance = APIRootService.getAxiosInstance();
    return apiInstance
      .put(`${endPoint.getProfile}`, formData)
      .then(({data}) => data);
  };
  public static changeMobileNumber = (formData: any) => {
    const apiInstance = APIRootService.getAxiosInstance();
    ConsoleLogger.log(" Change Mobile Number ----> ",formData);
    return apiInstance
      .patch(`${endPoint.changeMobileNumber}`, formData)
      .then(({data}) => data);
  };
  public static changeEmail = (formData: any) => {
    const apiInstance = APIRootService.getAxiosInstance();
    return apiInstance
      .patch(`${endPoint.changeEmail}`, formData)
      .then(({data}) => data);
  };
  public static verifyEmailChangeOtp = (formData: any) => {
    const apiInstance = APIRootService.getAxiosInstance();
    return apiInstance
      .patch(`${endPoint.updateEmail}`, formData)
      .then(({data}) => data);
  };
  public static verifyMobileChangeOtp = (formData: any) => {
    const apiInstance = APIRootService.getAxiosInstance();
    return apiInstance
      .patch(`${endPoint.updateMobile}`, formData)
      .then(({data}) => data);
  };
}
