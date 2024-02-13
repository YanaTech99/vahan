import {ErrorObject} from '../components/error';
import {
  HIDE_ERROR,
  HIDE_TOASTER,
  IS_SHOW_ADS,
  LOAD_APP_CONFIG,
  SET_ERROR,
  SET_MEMBER_ID,
  SET_USER_TOKEN,
  SHOW_TOASTER,
} from './action-types';
import {AppInitialConfig, AppTokenConfig, Loader} from './app.config.interface';

/**
@file store.interface.ts
@description store
 */
export interface InitialConfigDispat {
  setToken: (_: string) => {
    type: typeof SET_USER_TOKEN;
    payload: string;
  };
  setMemberId: (_: string) => {
    type: typeof SET_MEMBER_ID;
    payload: string;
  };
  loadAppConfig: (_: AppInitialConfig) => {
    type: typeof LOAD_APP_CONFIG;
    payload: AppInitialConfig;
  };
  setAdsStatus: (_: boolean) => {
    type: typeof IS_SHOW_ADS;
    payload: boolean;
  };
}

export interface AppTokenDispatchable {
  setToken: (_: AppTokenConfig) => {
    type: typeof SET_USER_TOKEN;
    payload: AppTokenConfig;
  };
}

export interface ErrorAction {
  type:
    | typeof SET_ERROR
    | typeof HIDE_ERROR
    | typeof SHOW_TOASTER
    | typeof HIDE_TOASTER;
  payload?: Error | Toaster;
}

export interface SetAdsAction {
  type: typeof IS_SHOW_ADS;
  payload?: boolean;
}

export interface LoaderAction {
  type: string;
  label?: string;
}

export enum ToasterType {
  Error = 'Error',
  Information = 'Information',
  Success = 'Success',
}

export interface Toaster {
  message: string;
  ToasterType: ToasterType;
}

export interface AppStore {
  loader: Loader;
  error: Partial<ErrorObject>;
  appConfig: AppInitialConfig;
  appToken: AppTokenConfig;
}
