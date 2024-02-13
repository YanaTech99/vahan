import axios, {AxiosInstance} from 'axios';
import {ToasterType} from '../../store/store.interface';
import {ErrorObject} from '../../components/error';
import {ErrorType} from '../../components/error/error.interface';
import {ConsoleLogger} from '../logger.service';
import {APIConstants} from './api-endpoints.constants';
import {APIResponseInterceptor} from './api-response.interceptor';
import {APIRequestInterceptor} from './api-request.interceptor';
import {AppConstant} from '../../utils/app.constant';

export class APIRootService {
  private static readonly className = 'APIRootService';
  private static axiosInstance: Record<string, AxiosInstance>;
  private static errorInterceptor: APIResponseInterceptor;
  private static requestInterceptor: APIRequestInterceptor;

  private static initial(): AxiosInstance {
    APIRootService.errorInterceptor = new APIResponseInterceptor();
    APIRootService.requestInterceptor = new APIRequestInterceptor();
    APIRootService.axiosInstance = {
      ...APIRootService.axiosInstance,
      [APIConstants.BASE_URL]: axios.create({
        baseURL: APIConstants.BASE_URL,
        timeout: AppConstant.API_CONSTANTS.TIMEOUT_MS,
        timeoutErrorMessage: AppConstant.API_CONSTANTS.TIMEOUT_MESSAGE,
      }),
    };
    APIRootService.errorInterceptor.register(
      APIRootService.axiosInstance[APIConstants.BASE_URL],
    );

    APIRootService.requestInterceptor.registerCommonHeaders(
      APIRootService.axiosInstance[APIConstants.BASE_URL],
    );

    APIRootService.addAuthHeader();
    return APIRootService.axiosInstance[APIConstants.BASE_URL];
  }

  public static getAxiosInstance(): AxiosInstance {
    const baseUrl = APIConstants.BASE_URL;

    if (APIRootService.axiosInstance?.[baseUrl]) {
      return APIRootService.axiosInstance?.[baseUrl];
    } else {
      return APIRootService.initial();
    }
  }

  public static addAuthHeader(): void {
    APIRootService.getAxiosInstance();
    if (APIRootService.axiosInstance?.[APIConstants.BASE_URL]) {
      const axiosInstance = APIRootService.axiosInstance[APIConstants.BASE_URL];
      ConsoleLogger.log('addAuthHeader calling....');
      APIRootService.requestInterceptor.registerAuthorizationToken(
        axiosInstance,
      );
    } else {
      throw new ErrorObject({
        message: 'Instance not  create',
        type: ErrorType.GENERIC,
        componentName: APIRootService.className,
        name: '',
        ToasterType: ToasterType.Error,
      });
    }
  }
}
