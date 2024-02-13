import { AxiosInstance, AxiosError, AxiosRequestConfig } from "axios";
import { ConsoleLogger } from "../logger.service";
import store from "../../store/store";

export class APIRequestInterceptor {
  private static readonly COMMON_HEADERS = {
    "cache-control": "no-cache",
    "Content-Type": "application/json",
  };

  private static readonly COMMON_HEADERS_FOR_IMAGE = {
    "cache-control": "no-cache",
    "Content-Type": "multipart/form-data",
  };

  public multipartHeaders(axiosInstance: AxiosInstance): void {
    this.configureHeader(
      axiosInstance,
      APIRequestInterceptor.COMMON_HEADERS_FOR_IMAGE
    );
  }

  public registerCommonHeaders(axiosInstance: AxiosInstance): void {
    this.configureHeader(axiosInstance, APIRequestInterceptor.COMMON_HEADERS);
  }

  public registerAuthorizationToken(axiosInstance: AxiosInstance): void {
    ConsoleLogger.log(
      "Redux data --> 2",
      store.getState().users.appConfig?.userData
    );
    axiosInstance.interceptors.request.use(
      (config: AxiosRequestConfig) => {
        (config.headers = {
          ...config.headers,
          ...APIRequestInterceptor.COMMON_HEADERS,
          "x-api-key": store.getState().users.appConfig?.token,
        }),
          //ConsoleLogger.log('Redux data --> ', config.headers);
          ConsoleLogger.log("request api ----");
        ConsoleLogger.log(
          "url ---> ",
          config.baseURL,
          config.url,
          " params => ",
          config.data,
          " header => ",
          config.headers
        );
        return config;
      },
      (error: AxiosError) => Promise.reject(error)
    );
  }

  private configureHeader(
    axiosInstance: AxiosInstance,
    options: Record<string, string>
  ): void {
    axiosInstance.interceptors.request.use(
      (config: AxiosRequestConfig) => {
        ConsoleLogger.log("request api ----");
        ConsoleLogger.log(
          "url ---> ",
          config.baseURL,
          config.url,
          " params => ",
          config.data,
          " header => ",
          config.headers
        );
        config.headers = {
          ...config.headers,
          ...options,
        };

        return config;
      },
      (error: AxiosError) => Promise.reject(error)
    );
  }
}
