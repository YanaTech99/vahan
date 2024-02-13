/**
 *@file api-error.interceptor.ts
 *@description Api Error interceptor
 */
import { AxiosInstance, AxiosError, AxiosResponse } from "axios";
import { Alert } from "react-native";

import { ErrorType } from "../../components/error/error.interface";
import { ErrorObject } from "../../components/error/index";
import { ConsoleLogger } from "../logger.service";

import { checkInternetConnection } from "../../utils/units/utils";
import { ToasterType } from "../../store/store.interface";
//import { useTranslations } from "../../hooks";
const connectError = "Netwrok Error";
const connectErrorCode = 502;
//const { strings } = useTranslations();
export class APIResponseInterceptor {
  private static readonly NETWORK_ERROR = connectError;

  public register(axiosInstance: AxiosInstance): void {
    const interceptor = axiosInstance.interceptors.response.use(
      (response: AxiosResponse) => response,
      async (error: AxiosError) => {
        ConsoleLogger.log("register error --> ", error.response);
        if (error.message == APIResponseInterceptor.NETWORK_ERROR) {
          return Promise.reject({ ...error, code: connectErrorCode });
        }
        checkInternetConnection().then((isInterConnected) => {
          if (!isInterConnected) {
            Alert.alert("", "something went wrong");
            return null;
          }
        });
        if (error.response) {
          const httResponseError = this.errorResponse(
            error,
            error?.response?.data?.message || null
          );
          return Promise.reject(httResponseError);
        }

        return Promise.reject(error);
      }
    );
  }

  private errorResponse(error: AxiosError, msg: string): ErrorObject {
    ConsoleLogger.log("errorResponse response ----> ", error);
    return new ErrorObject({
      code: error.response?.status ?? "Unknow",
      message: msg || "something_went_wrong",
      type: ErrorType.GENERIC,
      ToasterType: ToasterType.Error,
      url: "",
      metadata: error.config,
      componentName: "ApiRequestError",
    });
  }
}
